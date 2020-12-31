import React, { useEffect, useState } from 'react'
import UserCardWrapper from '../../BaseComponets/UserCardWrapper'
import { mockData } from '../../../Services/mockedData'
import { User } from '../../../Types/User'
import Filter from '../../BaseComponets/Filter'

const MainPage = () => {
  const [mainEditFormId] = useState(0)
  const [filterInput, setFilterInput] = useState('')
  const [userListDefault, setUserListDefault] = useState<User[]>()
  const [userList, setUserList] = useState<User[]>()

  const fetchData = () => {
    setUserList(mockData)
    setUserListDefault(mockData)
  }

  const updateInput = (input: string) => {
    const filtered = userListDefault?.filter(user => {
      return user.name.toLowerCase().includes(input.toLowerCase())
    })
    setFilterInput(input)
    setUserList(filtered)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <ul>
        <Filter input={filterInput} onChange={updateInput} />
        {userList?.map((user, index) => (
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
