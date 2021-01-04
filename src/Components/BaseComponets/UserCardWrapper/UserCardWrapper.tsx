import React, { useState } from 'react'
import UserCardForm from '../UserCardForm'
import UserCard from '../UserCard'
import { User } from '../../../Types/User'
import { MAIN_EDIT_FORM_TYPE } from '../../../Constants/User'
import { initialUserValues } from '../../../Utils/getInitialUserData'

type UserCardWrapperProps = Partial<{
  user: User
  editFormType: string
}>

const UserCardWrapper: React.FC<UserCardWrapperProps> = ({
  user,
  editFormType,
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

  const isMainEditForm = (formType: string) => {
    return editFormType === formType
  }

  const renderUserCard = () => {
    if (userForm) {
      return (
        <li className="user">
          <UserCardForm
            user={user}
            handleSaveClick={handleSaveClick}
            handleCancelClick={handleCancelClick}
          />
        </li>
      )
    } else if (isMainEditForm(MAIN_EDIT_FORM_TYPE)) {
      return <UserCardForm isMainEditForm />
    } else {
      return (
        <UserCard
          user={user || initialUserValues}
          handleClick={handleEditClick}
        />
      )
    }
  }

  return <>{renderUserCard()}</>
}

export default UserCardWrapper
