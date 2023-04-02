export interface IUser {
  name: string | undefined
  email: string | undefined
  image: string | undefined
}

export interface ITokenResponse {
  accessToken: string
  refreshToken: string
}

export interface ICreateRoomResponse {
  id: string
}

export interface IExtendedUser extends IUser {
  id: number
}

export interface IMessageResponse {
  id: number
  text: string
  create_at: Date
  author: IExtendedUser | null
  room: any
}
