import React, { useEffect, useState } from 'react'
import UserCardWrapper from '../../BaseComponets/UserCardWrapper'
import { mockData } from '../../../Services/mockedData'
import { User } from '../../../Types/User'
import Filter from '../../BaseComponets/Filter'
import { MAIN_EDIT_FORM, PER_PAGE } from '../../../Constants/User'
import { Pagination } from '@material-ui/lab'
import usePagination from '../../../Hooks/usePagination'
import './MainPage.scss'

const MainPage = () => {
  const [filterInput, setFilterInput] = useState('')
  const [userListDefault, setUserListDefault] = useState<User[]>(mockData)
  const [userList, setUserList] = useState<User[]>(mockData)
  const [currentPage, setCurrentPage] = useState(1)

  const count = Math.ceil(userList.length / PER_PAGE)
  const _DATA = usePagination(userList, PER_PAGE)

  const handleChange = (e: any, page: number) => {
    setCurrentPage(page)
    return _DATA?.jump(page)
  }

  const fetchData = () => {
    setUserList(mockData) // real data
    setUserListDefault(mockData) // real data
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
      <Filter input={filterInput} onChange={updateInput} />
      <UserCardWrapper editFormType={MAIN_EDIT_FORM} />
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
