import { FC } from 'react'
import cls from 'classnames'
import { Session } from 'next-auth'
import { format } from 'date-fns'
import styles from './chat-message.module.scss'
import { IDefaultComponentProps } from '../../lib/types/component.types'
import { IMessageResponse } from '../../lib/types/api.types'

interface IComponentProps extends IDefaultComponentProps {
  session: Session
  message: IMessageResponse
}

export const ChatMessage: FC<IComponentProps> = ({ session, message }) => (
  <div
    className={cls(styles.wrapper, {
      [styles.authorWrapper]: session.user?.email === message.author?.email,
      [styles.otherWrapper]: session.user?.email !== message.author?.email,
    })}
  >
    <div
      className={cls(styles.message, {
        [styles.authorMessage]: session.user?.email === message.author?.email,
        [styles.otherMessage]: session.user?.email !== message.author?.email,
      })}
    >
      <span>{message.author?.email ?? 'Game session'}</span>
      <span>{message.text}</span>
      <span>{format(message.create_at, 'HH:mm')}</span>
    </div>
  </div>
)
