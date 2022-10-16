export interface LoginType {
  statusCode: number
  content: Content
  dateTime: string
}

export interface Content {
  user: User
  token: string
}

export interface User {
  id: number
  name: string
  email: string
  password: string
  phone: string
  birthday: string
  avatar: string
  gender: boolean
  role: string
}

export interface DataLogin {
  username: string
  password: string
}