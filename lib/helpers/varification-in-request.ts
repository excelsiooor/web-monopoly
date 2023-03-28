import { UseMutateAsyncFunction } from '@tanstack/react-query/build/lib/types'
import { Session } from 'next-auth'
import { ITokenResponse, IUser } from '../types/api.types'

export const varaficationInRequest = async (
  session: Session,
  mutate: UseMutateAsyncFunction<void | ITokenResponse, unknown, IUser, unknown>,
  callBack: () => Promise<void>,
) => {
  await mutate({
    name: session.user?.name ?? '',
    email: session.user?.email ?? '',
    image: session.user?.image ?? '',
  })
  await callBack()
}
