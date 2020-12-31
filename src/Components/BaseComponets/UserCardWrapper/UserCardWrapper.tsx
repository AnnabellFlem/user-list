import React, { useState } from 'react'
import UserCardForm from '../UserCardForm'
import UserCard from '../UserCard'
import { User } from '../../../Types/User'

type UserCardWrapperProps = {
  user: User
  isMainEditForm: boolean
}

const UserCardWrapper: React.FC<UserCardWrapperProps> = ({
  user,
  isMainEditForm,
}) => {
  const [userForm, setUserForm] = useState<boolean>()

  const handleEditClick = () => {
    setUserForm(true)
  }

  const handleSaveClick = () => {
    setUserForm(false)
  }

  const handleCancelClick = () => {
    setUserForm(false)
  }

  const handleCreateClick = () => {
    setUserForm(true)
  }

  return (
    <>
      {userForm || isMainEditForm ? (
        <UserCardForm
          user={user}
          isMainEditForm={isMainEditForm}
          handleSaveClick={handleSaveClick}
          handleCreateClick={handleCreateClick}
          handleCancelClick={handleCancelClick}
        />
      ) : (
        <UserCard user={user} handleClick={handleEditClick} />
      )}
    </>
  )
}

export default UserCardWrapper
