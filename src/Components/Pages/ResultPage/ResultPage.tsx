import React from 'react'
import './ResultPage.css'
import Button from '../../BaseComponents/Button'
import { ReactComponent as ThumbsUpLogo } from '../../../Images/svg/thumbs-up.svg'
import useMedia from 'use-media'
import { MEDIA_QUERY_MOBILE } from '../../../Constants/MediaQueries'
import { questionArray, moneyArray } from '../../../Services/mockData'

type Props = Partial<{
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement | HTMLElement>) => void
  handleResult: () => void
}> & { currentNumberQuestion: number; win: boolean }

const ResultPage: React.FC<Props> = ({
  onButtonClick,
  currentNumberQuestion,
  win,
}) => {
  const isWide = useMedia(MEDIA_QUERY_MOBILE)

  const getMoneyResult = () => {
    const firstQuestion = 0
    let result = `${firstQuestion}$`
    const isLastQuestion = questionArray.length - 1 === currentNumberQuestion

    if (isLastQuestion && win) {
      result = moneyArray[currentNumberQuestion]
    } else if (
      currentNumberQuestion !== firstQuestion ||
      (isLastQuestion && !win)
    ) {
      result = moneyArray[currentNumberQuestion - 1]
    }

    return result
  }

  return (
    <main>
      <section className="main">
        <div className="main__wrapper">
          <div className="main__image">
            <ThumbsUpLogo />
          </div>
          <div className="main__text">
            <h2 className="main__title-total">Total score:</h2>
            <h3 className="main__title">{getMoneyResult()} earned</h3>
            {isWide ? (
              <Button onClick={onButtonClick} value="retry">
                Try again
              </Button>
            ) : (
              <Button onClick={onButtonClick} size="s" fullWidth value="retry">
                Try again
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ResultPage
