export interface IUser {
  name: string | undefined
  email: string | undefined
  image: string | undefined
}

export interface ITokenResponse {
  accessToken: string
  refreshToken: string
}
