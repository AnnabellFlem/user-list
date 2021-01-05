export type User = {
  id: string
  name: string
  surname: string
  email: string
  phone: string
  birthday: string
  credit: string
}

export type Message = {
  text: string
  isSuccess: boolean | undefined
}
