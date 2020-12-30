import { mockData } from '../Services/mockedData'
import { User } from '../Types/User'
import { getRandomNumber } from './getRandomInt'

const getInitId = (users: User[] = []) => {
  const id = 1
  if (users.length) {
    const maxId = users.reduce(
      (max, user) => (user.id > max ? user.id : max),
      users[0].id,
    )

    return getRandomNumber(maxId)
  }
  return id
}

export const initialUserValues = {
  id: getInitId(mockData),
  name: '',
  surname: '',
  email: '',
  phone: '',
  birthday: '',
}
