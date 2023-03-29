/* eslint-disable no-console */
import axiosInstance from '../axios-service'
import { HttpService } from '../http-srvice/http.service'
import { HttpServiceWithToken } from '../http-srvice/http-with-token.service'
import { RoomsEndpoints } from '../../constants/endpoints.const'
import { ICreateRoomResponse } from '../../types/api.types'

class RoomsService extends HttpServiceWithToken {
  constructor() {
    super(new HttpService(axiosInstance))
  }

  async getCreatedRoom() {
    const res = await this.get<ICreateRoomResponse>(RoomsEndpoints.CREATE)
    return res
  }
}

const roomsService = new RoomsService()

export default roomsService
