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
  const [userForm, setUserForm] = useState()

  return (
    <>
      {userForm || isMainEditForm ? (
        <UserCardForm user={user} isMainEditForm={isMainEditForm} />
      ) : (
        <UserCard user={user} />
      )}
    </>
  )
}

export default UserCardWrapper
