import { FC } from 'react'
import cls from 'classnames'
import styles from './users-board.module.scss'
import { IDefaultComponentProps } from '../../lib/types/component.types'
import { IExtendedUser } from '../../lib/types/api.types'
import { UserCard } from '../user-card'

interface IComponentProps extends IDefaultComponentProps {
  users?: IExtendedUser[]
}

export const UsersBoard: FC<IComponentProps> = ({ users }) => (
  <section className={cls(styles.wrapper)}>
    {users?.map(user => (
      <UserCard key={user.id} user={user} />
    ))}
  </section>
)
