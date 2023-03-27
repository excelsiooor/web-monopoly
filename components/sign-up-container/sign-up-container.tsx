import React, { FC } from 'react'
import cls from 'classnames'
import { IDefaultComponentProps } from '../../lib/types/component.types'
import styles from './sign-up-container.module.scss'

interface IComponentProps extends IDefaultComponentProps {
  children: React.ReactNode
}

export const SugnUpContainer: FC<IComponentProps> = ({ style, className, children }) => (
  <main style={style} className={cls(className, styles.wrapper)}>
    {children}
  </main>
)
