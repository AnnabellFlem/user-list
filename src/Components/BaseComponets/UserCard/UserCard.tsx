import React from 'react'
import { User } from '../../../Types/User'
import './UserCard.scss'

type UserCardProps = {
  user: User
  handleClick: any
}
const getGender = (userId: number) => (userId % 2 === 0 ? 'men' : 'women')

const UserCard: React.FC<UserCardProps> = ({ user, handleClick }) => {
  return (
    <li className="user" id={`user-${user.id}`}>
      <div className="user__header">
        <div className="user__avatar">
          <img
            src={`https://randomuser.me/api/portraits/${getGender(user.id)}/${
              user.id
            }.jpg`}
            alt={`${user.name}`}
            width={50}
            height={50}
          />
        </div>
      </div>
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
      <div className="user__info">
        <span className="user__title">Phone</span>
        <span className="user__data">{user.phone}</span>
      </div>
      <div className="user__info">
        <span className="user__title">Birthday</span>
        <span className="user__data">{user.birthday}</span>
      </div>

      <button className="user__btn--edit" type="button" onClick={handleClick}>
        Edit info
      </button>
    </li>
  )
}

export default UserCard
