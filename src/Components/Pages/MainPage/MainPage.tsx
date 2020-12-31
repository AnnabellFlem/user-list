import React, { useEffect, useState } from 'react'
import UserCardWrapper from '../../BaseComponets/UserCardWrapper'
import { mockData } from '../../../Services/mockedData'
import { User } from '../../../Types/User'
import Filter from '../../BaseComponets/Filter'
import { MAIN_EDIT_FORM } from '../../../Constants/User'
import './MainPage.scss'

const MainPage = () => {
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
    console.log(filtered)
    setUserList(filtered)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <Filter input={filterInput} onChange={updateInput} />
      <UserCardWrapper editFormType={MAIN_EDIT_FORM} />
      <ul className="list">
        {userList?.map(user => (
          <UserCardWrapper key={user.id} user={user} />
        ))}
      </ul>
    </main>
  )
}

export default MainPage
