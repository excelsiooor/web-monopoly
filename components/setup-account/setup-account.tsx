import { FC, useState } from 'react'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'
import cls from 'classnames'
import Image from 'next/image'
import { Button, CircularProgress, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { signOut } from 'next-auth/react'
import styles from './setup-account.module.scss'
import { IDefaultComponentProps } from '../../lib/types/component.types'
import { useGoogleLoginMutaion } from '../../lib/hooks/use-google-login'
import { varaficationInRequest } from '../../lib/helpers/varification-in-request'
import { RoomSetup } from '../room-setup'
import { useCreateRoomMutation } from '../../lib/hooks/use-create-room'

interface IComponentProps extends IDefaultComponentProps {
  session: Session
}

export const SetupAccount: FC<IComponentProps> = ({ style, className, session }) => {
  const router = useRouter()

  const { mutateAsync: validateUser } = useGoogleLoginMutaion()
  const { mutateAsync: getCreatedRoom, data } = useCreateRoomMutation()

  const [isLoading, setIsLoading] = useState(false)
  const [isCreateModal, setIsCreateModal] = useState(false)

  const createRoom = async () => {
    setIsLoading(true)
    try {
      await varaficationInRequest(session, validateUser, async () => {
        getCreatedRoom()
      }).then(() => {
        setIsCreateModal(true)
        setIsLoading(false)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section style={style} className={cls(className, styles.wrapper)}>
        <div className={styles.infoBlock}>
          <div>{session.user?.image && <Image src={session.user?.image} alt="avatar" width={60} height={60} />}</div>
          <div>
            <span>{session.user?.name}</span>
            <span>{session.user?.email}</span>
          </div>
        </div>
        <div>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Button variant="contained" onClick={createRoom}>
                Create Room
              </Button>
              <Button variant="contained">Join to Room</Button>
            </>
          )}
        </div>
        <div>
          <IconButton onClick={() => signOut()}>
            <LogoutIcon />
          </IconButton>
        </div>
      </section>
      {data && (
        <Dialog open={isCreateModal} onClose={() => setIsCreateModal(false)} maxWidth={false}>
          <DialogTitle>Create Room</DialogTitle>
          <DialogContent>
            <RoomSetup id={data.id} />
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
