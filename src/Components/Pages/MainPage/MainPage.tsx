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

type Message = {
  text: string
  isSuccess: boolean
}

const initialMessage = {
  text: '',
  isSuccess: false,
}

const MainPage = () => {
  const [filterInput, setFilterInput] = useState('')
  const [userListDefault, setUserListDefault] = useState<User[]>([])
  const [userList, setUserList] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [message, setMessage] = useState<Message>(initialMessage)

  const count = Math.ceil(userList.length / PER_PAGE)
  const _DATA = usePagination(userList, PER_PAGE)

  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page)
    return _DATA?.jump(page)
  }

  const handleFormMessage = (text: string, isSuccess = false) => {
    return setMessage({ text, isSuccess })
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (message?.isSuccess) {
        setMessage(initialMessage)
      }
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [message])

  return (
    <main>
      <Filter input={filterInput} onChange={updateInput} />
      <UserCardWrapper
        handleFormMessage={handleFormMessage}
        editFormType={MAIN_EDIT_FORM_TYPE}
      />
      {message?.text && (
        <span
          className={`message ${
            message.isSuccess ? 'message--success' : 'message--error'
          }`}
        >
          {message.text}
        </span>
      )}
      <ul className="list">
        {_DATA?.currentData().map(user => (
          <UserCardWrapper
            key={user.id}
            user={user}
            handleFormMessage={handleFormMessage}
          />
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
