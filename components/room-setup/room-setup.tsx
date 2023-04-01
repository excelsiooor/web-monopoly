import cls from 'classnames'
import { FC } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Button, IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import styles from './room-setup.module.scss'
import { IDefaultComponentProps } from '../../lib/types/component.types'
import { requireEnv } from '../../lib/helpers/require-env'
import { ROUTES } from '../../lib/constants/routes.const'

interface IComponentProps extends IDefaultComponentProps {
  id: string
}

const baseUrl = requireEnv('NEXT_PUBLIC_CLIENT_URL', process.env.NEXT_PUBLIC_CLIENT_URL)

export const RoomSetup: FC<IComponentProps> = ({ style, className, id }) => {
  const router = useRouter()
  const cproppedId = id.slice(0, 8)

  const joinToRoom = () => {
    router.push(`${ROUTES.ROOM}/${id}`)
  }

  return (
    <section style={style} className={cls(className, styles.wrapper)}>
      <div>
        <span>
          {`${baseUrl}${ROUTES.ROOM}/${cproppedId}...`}
          <CopyToClipboard text={`${baseUrl}${ROUTES.ROOM}/${id}`}>
            <IconButton>
              <ContentCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </span>

        <Button onClick={joinToRoom}>Join</Button>
      </div>
    </section>
  )
}
