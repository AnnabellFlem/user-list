import React, { useState } from 'react'
import StartPage from '../StartPage'
import GamePage from '../GamePage'
import ResultPage from '../ResultPage'

const MainPage: React.FC = () => {
  const [startGame, setStartGame] = useState(true)
  const [endGame, setEndGame] = useState(false)
  const [win, setWin] = useState(false)
  const [currentNumberQuestion, setCurrentNumberQuestion] = useState(0)

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLElement, MouseEvent>,
  ) => {
    const target = e.currentTarget as HTMLButtonElement
    if (target.value === 'start') {
      setStartGame(false)
    } else if (target.value === 'retry') {
      setCurrentNumberQuestion(0)
      setEndGame(false)
    } else return null
  }

  const handleEndGame = (isEndGame: boolean) => {
    setEndGame(true)
    setWin(isEndGame)
  }

  const handleQuestion = (question: number) => {
    setCurrentNumberQuestion(question)
  }

  return (
    <>
      {startGame && !endGame && <StartPage onButtonClick={handleClick} />}
      {!startGame && !endGame && (
        <GamePage
          handleQuestion={handleQuestion}
          handleEndGame={handleEndGame}
          currentNumberQuestion={currentNumberQuestion}
        />
      )}
      {!startGame && endGame && (
        <ResultPage
          currentNumberQuestion={currentNumberQuestion}
          onButtonClick={handleClick}
          win={win}
        />
      )}
    </>
  )
}

export default MainPage
