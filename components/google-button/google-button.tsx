import React, { FC } from 'react'
import cls from 'classnames'
import { IDefaultComponentProps } from '../../lib/types/component.types'
import styles from './google-button.module.scss'
import GoogleIcon from '../../icons/google-icon'
import { useGoogleLoginMutaion } from '../../lib/hooks/use-google-login'

export const GoogleButton: FC<IDefaultComponentProps> = ({ style, className }) => {
  const { mutate } = useGoogleLoginMutaion()

  return (
    <div style={style} className={cls(className, styles.wrapper)} aria-hidden onClick={() => mutate()}>
      <GoogleIcon />
      <span>Connect with google</span>
    </div>
  )
}
