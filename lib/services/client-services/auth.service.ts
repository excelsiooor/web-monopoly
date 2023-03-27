import axiosInstance from '../axios-service'
import { HttpService } from '../http-srvice/http.service'
import { AuthEndpoints } from '../../constants/endpoints.const'

class AuthService extends HttpService {
  constructor() {
    super(axiosInstance)
  }

  async login() {
    return this.get(AuthEndpoints.LOG_IN)
  }
}

const authService = new AuthService()

export default authService
