import cls from 'classnames'
import { FC } from 'react'
import styles from './room-setup.module.scss'
import { IDefaultComponentProps } from '../../lib/types/component.types'

interface IComponentProps extends IDefaultComponentProps {
  id?: string
}

export const RoomSetup: FC<IComponentProps> = ({ style, className, id }) => (
  <section style={style} className={cls(className, styles.wrapper)}>
    {id}
  </section>
)
