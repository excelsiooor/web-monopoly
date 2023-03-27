/* eslint-disable no-console */
import axiosInstance from '../axios-service'
import { HttpService } from '../http-srvice/http.service'
import { AuthEndpoints } from '../../constants/endpoints.const'
import { ITokenResponse, IUser } from '../../types/api.types'

class AuthService extends HttpService {
  constructor() {
    super(axiosInstance)
  }

  async login(user: IUser) {
    try {
      return await this.post<ITokenResponse, IUser>(AuthEndpoints.LOG_IN, user)
    } catch (error) {
      console.log(error)
    }
  }
}

const authService = new AuthService()

export default authService
