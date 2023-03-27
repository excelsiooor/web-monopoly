import { useMutation } from '@tanstack/react-query'
import { QueryKeys } from '../constants/app-keys-const'
import authService from '../services/client-services/auth.service'

export const useGoogleLoginMutaion = () => {
  const query = useMutation({
    mutationKey: [QueryKeys.LOGIN],
    mutationFn: () => authService.login(),
  })

  return query
}
