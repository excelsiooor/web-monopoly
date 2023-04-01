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
