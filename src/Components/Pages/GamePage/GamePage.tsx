import React, { useState } from 'react'
import MainLayout from './MainLayout'
import Header from './Header'
import Footer from './Footer'

type GamePage = {
  handleEndGame: (isEndGame: boolean) => void
  handleQuestion: (question: number) => void
  currentNumberQuestion: number
}

const GamePage: React.FC<GamePage> = ({
  handleEndGame,
  handleQuestion,
  currentNumberQuestion,
}) => {
  const [openFavList, setOpenFavList] = useState(false)

  const handleBtnClick = () => {
    setOpenFavList(!openFavList)
  }

  return (
    <>
      <Header
        handleBtnClick={handleBtnClick}
        currentNumberQuestion={currentNumberQuestion}
      />
      <MainLayout
        handleCurrentQuestion={handleQuestion}
        currentNumberQuestion={currentNumberQuestion}
        handleEndGame={handleEndGame}
      />
      <Footer />
    </>
  )
}

export default GamePage
