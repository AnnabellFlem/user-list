import React, { useState } from 'react'
import UserCardWrapper from '../../BaseComponets/UserCardWrapper'
import { mockData } from '../../../Services/mockedData'

const MainPage = () => {
  const [mainEditFormId] = useState(0)

  return (
    <main>
      <ul>
        {mockData.map((user, index) => (
          <UserCardWrapper
            key={user.id}
            user={user}
            isMainEditForm={index === mainEditFormId}
          />
        ))}
      </ul>
    </main>
  )
}

export default MainPage
