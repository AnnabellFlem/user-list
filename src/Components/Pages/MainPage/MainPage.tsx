import React, { useEffect, useState } from 'react'
import UserCardWrapper from '../../BaseComponets/UserCardWrapper'
import { mockData } from '../../../Services/mockedData'
import { User } from '../../../Types/User'
import Filter from '../../BaseComponets/Filter'
import { MAIN_EDIT_FORM_TYPE, PER_PAGE } from '../../../Constants/User'
import { Pagination } from '@material-ui/lab'
import usePagination from '../../../Hooks/usePagination'
import { usersRef } from '../../../Services/firebase'
import './MainPage.scss'

const MainPage = () => {
  const [filterInput, setFilterInput] = useState('')
  const [userListDefault, setUserListDefault] = useState<User[]>([])
  const [userList, setUserList] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const count = Math.ceil(userList.length / PER_PAGE)
  const _DATA = usePagination(userList, PER_PAGE)

  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page)
    return _DATA?.jump(page)
  }

  const updateInput = (input: string) => {
    const filtered = userListDefault?.filter(user => {
      return user.name.toLowerCase().includes(input.toLowerCase())
    })
    setFilterInput(input)
    setUserList(filtered)
  }

  useEffect(() => {
    usersRef.on(
      'value',
      data => {
        if (data.exists()) {
          const items = data.val()
          const newState: User[] = []
          if (items) {
            Object.keys(items).forEach(key => {
              newState.push({ ...items[key], id: key })
            })
          }
          setUserList(newState)
          setUserListDefault(newState)
        } else {
          setUserList(mockData)
          setUserListDefault(mockData)
        }
      },
      (error: Error) => {
        console.log(error)
      },
    )
  }, [])

  return (
    <main>
      <Filter input={filterInput} onChange={updateInput} />
      <UserCardWrapper editFormType={MAIN_EDIT_FORM_TYPE} />
      <ul className="list">
        {_DATA?.currentData().map(user => (
          <UserCardWrapper key={user.id} user={user} />
        ))}
      </ul>
      <Pagination
        count={count}
        size="large"
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        className="pagination"
      />
    </main>
  )
}

export default MainPage
