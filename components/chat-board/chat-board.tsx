import { FC } from 'react'
import cls from 'classnames'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import styles from './chat-board.module.scss'
import { ChatInput } from '../chat-input'
import { IChatField } from '../../lib/types/form.types'
import { mockMessages } from '../../lib/constants/mock-values'
import { ChatMessage } from '../chat-message'

export const ChatBoard: FC = () => {
  const { control } = useForm<IChatField>()
  const { data: session } = useSession()

  return (
    <section className={cls(styles.wrapper)}>
      {session && (
        <>
          <div className={cls(styles.commentsWrapper)}>
            <div className={cls(styles.commentsContent)}>
              {mockMessages.map(message => (
                <ChatMessage key={message.id} session={session} message={message} />
              ))}
            </div>
          </div>
          <ChatInput control={control} />
        </>
      )}
    </section>
  )
}
