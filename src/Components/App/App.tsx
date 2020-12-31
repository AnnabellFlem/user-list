import React from 'react'
import MainPage from '../Pages/MainPage'
import Header from '../BaseComponets/Header'
import Footer from '../BaseComponets/Footer'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App
