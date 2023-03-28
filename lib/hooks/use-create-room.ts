import { useMutation } from '@tanstack/react-query'
import { QueryKeys } from '../constants/app-keys-const'
import roomsService from '../services/client-services/rooms.service'

export const useCreateRoomMutation = () => {
  const query = useMutation({
    mutationKey: [QueryKeys.CREATE_ROOM],
    mutationFn: () => roomsService.getCreatedRoom(),
  })

  return query
}
