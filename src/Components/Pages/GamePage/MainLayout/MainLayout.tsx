import React, { useEffect, useState } from 'react'
import './MainLayout.css'
import AnswerCell from '../../../BaseComponents/AnswerCell'
import Button from '../../../BaseComponents/Button'
import { questionArray, moneyArray } from '../../../../Services/mockData'
import useMedia from 'use-media'
import { MEDIA_QUERY_MOBILE } from '../../../../Constants/MediaQueries'
import { AnswersType } from '../../../../Types'
import classNames from 'classnames'

type AnswersArrayType = Array<AnswersType>

type MainLayoutType = {
  handleCurrentQuestion: (question: number) => void
  currentNumberQuestion: number
  handleEndGame: (isEndGame: boolean) => void
}

const MainLayout: React.FC<MainLayoutType> = ({
  handleCurrentQuestion,
  currentNumberQuestion,
  handleEndGame,
}) => {
  const isWide = useMedia(MEDIA_QUERY_MOBILE)
  const lastRound = moneyArray.length
  const [answersArray, setAnswersArray] = useState<Array<string>>([])
  const [resultArray, setResultArray] = useState<AnswersArrayType>([])
  const [rightAnswer, setRightAnswer] = useState<boolean | null>()

  const currentQuestion = questionArray[currentNumberQuestion]

  const defaultMainLayoutClassName = 'MainLayout'
  const mainLayoutClassNames = classNames(defaultMainLayoutClassName, {
    [`${defaultMainLayoutClassName}--loading`]: rightAnswer !== null,
  })

  const arrayEquals = (arrayOne: Array<any>, arrayTwo: Array<any>) => {
    return (
      Array.isArray(arrayOne) &&
      Array.isArray(arrayTwo) &&
      arrayOne.length === arrayTwo.length &&
      arrayOne.every((val, index) => val === arrayTwo[index])
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currID = e.currentTarget.id
    const index = answersArray.indexOf(currID)
    if (index > -1) {
      answersArray.splice(index, 1)
      return setAnswersArray(answersArray)
    }
    return setAnswersArray([...answersArray, currID])
  }

  const handleCheck = () => {
    const rightAns = currentQuestion.answers.filter(item => item.right)

    const userAns = currentQuestion.answers.filter(item => {
      if (answersArray.includes(item.id)) {
        return item
      }
      return null
    })

    setResultArray([...rightAns, ...userAns.filter(item => !item.right)])

    if (arrayEquals(rightAns, userAns)) {
      setRightAnswer(true)
    } else return setRightAnswer(false)
  }

  useEffect(() => {
    if (rightAnswer !== null) {
      const timeout = setTimeout(() => {
        if (rightAnswer) {
          setAnswersArray([])
          setResultArray([])
          currentNumberQuestion === lastRound - 1
            ? handleEndGame(true)
            : handleCurrentQuestion(currentNumberQuestion + 1)
        } else handleEndGame(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }
    // eslint-disable-next-line
  }, [rightAnswer])

  useEffect(() => {
    handleCurrentQuestion(currentNumberQuestion)
    setRightAnswer(null)
  }, [currentNumberQuestion, handleCurrentQuestion])

  const RenderList = (array: AnswersArrayType, resArr: AnswersArrayType) => {
    return (
      <>
        {array.map(item => {
          const currItem = resArr.includes(item)
          return (
            <li
              key={item.id}
              className={`${defaultMainLayoutClassName}__answers-item`}
            >
              {isWide ? (
                <AnswerCell
                  variant={item.variant}
                  id={item.id}
                  name="answer"
                  correct={currItem ? item.right : undefined}
                  wrong={currItem ? !item.right : undefined}
                  onChange={handleChange}
                  checked={answersArray.includes(item.id)}
                >
                  {item.answer}
                </AnswerCell>
              ) : (
                <AnswerCell
                  variant={item.variant}
                  sizeCell="s"
                  id={item.id}
                  correct={currItem ? item.right : undefined}
                  wrong={currItem ? !item.right : undefined}
                  name="answer"
                  onChange={handleChange}
                  checked={answersArray.includes(item.id)}
                >
                  {item.answer}
                </AnswerCell>
              )}
            </li>
          )
        })}
      </>
    )
  }

  return (
    <main>
      <section className={mainLayoutClassNames}>
        <form className={`${defaultMainLayoutClassName}__answers-form`}>
          <div
            role="group"
            className={`${defaultMainLayoutClassName}__answers-fieldset`}
          >
            <legend className={`${defaultMainLayoutClassName}__answers-text`}>
              {currentQuestion.question}
            </legend>
            <ul className={`${defaultMainLayoutClassName}__answers-list`}>
              {RenderList(currentQuestion.answers, resultArray)}
            </ul>
          </div>
          {isWide ? (
            <Button type="button" onClick={handleCheck}>
              Check
            </Button>
          ) : (
            <Button type="button" size="s" onClick={handleCheck}>
              Check
            </Button>
          )}
        </form>
      </section>
    </main>
  )
}

export default MainLayout
