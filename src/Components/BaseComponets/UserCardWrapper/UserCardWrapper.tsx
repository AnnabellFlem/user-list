import React, { useState } from 'react'
import UserCardForm from '../UserCardForm'
import UserCard from '../UserCard'
import { Message, User } from '../../../Types'
import { MAIN_EDIT_FORM_TYPE } from '../../../Constants/User'
import { initialUserValues } from '../../../Utils/getInitialUserData'

type UserCardWrapperProps = Partial<{
  user: User
  editFormType: string
}> & { handleFormMessage: ({ text, isSuccess }: Message) => void }

const UserCardWrapper: React.FC<UserCardWrapperProps> = ({
  user,
  editFormType,
  handleFormMessage,
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
            handleFormMessage={handleFormMessage}
          />
        </li>
      )
    } else if (isMainEditForm(MAIN_EDIT_FORM_TYPE)) {
      return (
        <UserCardForm isMainEditForm handleFormMessage={handleFormMessage} />
      )
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
