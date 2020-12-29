import React from 'react'
import UserCard from '../../BaseComponets/UserCard'
import { mockData } from '../../../Services/mockedData'

const MainPage = () => {
  return (
    <main>
      <ul>
        <UserCard user={mockData[0]} />
      </ul>
    </main>
  )
}

export default MainPage
