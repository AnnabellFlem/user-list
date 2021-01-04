import React from 'react'
import { User } from '../../../Types/User'
import './UserCard.scss'

type UserCardProps = {
  user: User
  handleClick: any
}

const UserCard: React.FC<UserCardProps> = ({ user, handleClick }) => {
  return (
    <li className="user">
      <div className="user__info">
        <span className="user__title">Name</span>
        <span className="user__data">{user.name}</span>
      </div>
      <div className="user__info">
        <span className="user__title">Surname</span>
        <span className="user__data">{user.surname}</span>
      </div>
      <div className="user__info">
        <span className="user__title">Email</span>
        <span className="user__data">{user.email}</span>
      </div>
      {user.phone && (
        <div className="user__info">
          <span className="user__title">Phone</span>
          <span className="user__data">{user.phone}</span>
        </div>
      )}
      {user.birthday && (
        <div className="user__info">
          <span className="user__title">Birthday</span>
          <span className="user__data">{user.birthday}</span>
        </div>
      )}
      {user.credit && (
        <div className="user__info">
          <span className="user__title">Credit card</span>
          <span className="user__data">{user.credit}</span>
        </div>
      )}

      <button className="user__btn--edit" type="button" onClick={handleClick}>
        Edit info
      </button>
    </li>
  )
}

export default UserCard
