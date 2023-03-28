import { FC } from 'react'
import { CircularProgress } from '@mui/material'
import cls from 'classnames'
import styles from './loader.module.scss'
import { IDefaultComponentProps } from '../../lib/types/component.types'

interface IComponentProps extends IDefaultComponentProps {
  size?: number | string
}

export const Loader: FC<IComponentProps> = ({ style, className, size = 24, ...rest }) => (
  <section style={style} className={cls(className, styles.wrapper)}>
    <CircularProgress size={size} {...rest} />
  </section>
)
