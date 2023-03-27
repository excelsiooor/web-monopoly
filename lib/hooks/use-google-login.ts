import { useMutation } from '@tanstack/react-query'
import { QueryKeys, StorageKeys } from '../constants/app-keys-const'
import authService from '../services/client-services/auth.service'
import { IUser } from '../types/api.types'

export const useGoogleLoginMutaion = () => {
  const query = useMutation({
    mutationKey: [QueryKeys.LOGIN],
    mutationFn: (user: IUser) => authService.login(user),
    onSuccess: data => {
      if (data) {
        localStorage.setItem(StorageKeys.ACCESS_TOKEN, data.accessToken)
        localStorage.setItem(StorageKeys.REFRESH_TOKEN, data.refreshToken)
      }
    },
  })

  return query
}
