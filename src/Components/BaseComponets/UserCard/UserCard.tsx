import React from 'react'
import './UserCard.scss'

type UserCardProp = {
  user: {
    id: number
    name: string
    surname: string
    email: string
    phone: string
    birthday: string
  }
}

const getGender = (userId: number) => (userId % 2 === 0 ? 'men' : 'women')

const UserCard: React.FC<UserCardProp> = ({ user }) => {
  return (
    <li className="user" id={`user-${user.id}`}>
      <div className="user__header">
        <div className="user__avatar">
          <img
            src={`https://randomuser.me/api/portraits/${getGender(user.id)}/${
              user.id
            }.jpg`}
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
    </li>
  )
}

export default UserCard
