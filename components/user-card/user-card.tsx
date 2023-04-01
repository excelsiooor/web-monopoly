import { FC } from 'react'
import cls from 'classnames'
import Image from 'next/image'
import styles from './user-card.module.scss'
import { IDefaultComponentProps } from '../../lib/types/component.types'
import { IExtendedUser } from '../../lib/types/api.types'

interface IComponentProps extends IDefaultComponentProps {
  user: IExtendedUser
}

export const UserCard: FC<IComponentProps> = ({ user }) => (
  <div className={cls(styles.wrapper)}>
    <div>{user?.image && <Image src={user?.image} alt="avatar" width={30} height={30} />}</div>
    <div>
      <span>{user?.name}</span>
      <span>{user?.email}</span>
    </div>
  </div>
)
