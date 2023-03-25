import { AxiosError } from 'axios'
import { IMap } from '../../types/global.types'
import {
  IHttpClient,
  IHttpConfig,
  IResponse,
  IErrorResponse,
  IAxiosErrorResponeData,
  IAxiosErrorResponse,
} from '../../types/http.types'
import axiosInstance from '../axios-service'

export class HttpService implements IHttpClient {
  constructor(private fetchingService: IHttpClient, private baseUrl = process.env.REACT_APP_BACKEND_URL) {}

  public createQueryLink(base: string, args: IMap) {
    let url = `${base}?`
    Object.keys(args).forEach((parameter, index) => {
      if (args[parameter]) {
        url += `${index > 0 ? '&' : ''}${parameter}=${args[parameter]}`
      }
    })
    return url
  }

  public async get<T>(url: string, config?: IHttpConfig) {
    return this.fetchingService
      .get<IResponse<T>>(this.getFullApiUrl(url), {
        ...config,
        headers: {
          ...config?.headers,
          ...this.populateContentTypeHeaderConfig(),
        },
      })
      .then(result => {
        if (result) {
          this.checkResponseStatus(result)
          return result.data
        }
      })
      .catch(err => {
        this.errorHandler(err)
      })
  }

  public async post<T, D>(url: string, data: D, config?: IHttpConfig) {
    return this.fetchingService
      .post<IResponse<T>, D>(this.getFullApiUrl(url), data, {
        ...config,
        headers: {
          ...config?.headers,
          ...this.populateContentTypeHeaderConfig(),
        },
      })
      .then(result => {
        if (result) {
          this.checkResponseStatus(result)
          return result.data
        }
      })
      .catch(async err => {
        await this.errorHandler(err)
      })
  }

  public async patch<T, D>(url: string, data: D, config?: IHttpConfig) {
    return this.fetchingService
      .patch<IResponse<T>, D>(this.getFullApiUrl(url), data, {
        ...config,
        headers: {
          ...config?.headers,
          ...this.populateContentTypeHeaderConfig(),
        },
      })
      .then(result => {
        if (result) {
          this.checkResponseStatus(result)
          return result.data
        }
      })
      .catch(async err => {
        await this.errorHandler(err)
      })
  }

  public async put<T, D>(url: string, data: D, config?: IHttpConfig) {
    return this.fetchingService
      .put<IResponse<T>, D>(this.getFullApiUrl(url), data, config)
      .then(result => {
        if (result) {
          this.checkResponseStatus(result)
          return result.data
        }
      })
      .catch(err => {
        this.errorHandler(err)
      })
  }

  public async delete<T>(url: string, config?: IHttpConfig) {
    return this.fetchingService
      .delete<IResponse<T>>(this.getFullApiUrl(url), config)
      .then(result => {
        if (result) {
          this.checkResponseStatus(result)
          return result.data
        }
      })
      .catch(err => {
        this.errorHandler(err)
      })
  }

  public populateContentTypeHeaderConfig() {
    return {
      'Content-Type': 'application/json',
    }
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${url}`
  }

  private async errorHandler(error: AxiosError<IAxiosErrorResponse, IAxiosErrorResponeData>) {
    const errorData: IErrorResponse = {
      statusCode: error.response?.status || 404,
      message: error.response?.data?.reason || 'Oops, something went wrong!',
    }

    const event = new CustomEvent('http-error', { detail: errorData })
    document.dispatchEvent(event)

    if (errorData.statusCode === 403) {
      // Todo: implements refresh token logic
    }

    throw error
  }

  private checkResponseStatus<T>(result: IResponse<T>) {
    if (result.status >= 400 && result.status < 600) {
      const errorData = {
        response: {
          status: result.status,
          data: result.data,
        },
      }

      throw new Error(JSON.stringify(errorData))
    }
  }
}

export const httpService = new HttpService(axiosInstance)
