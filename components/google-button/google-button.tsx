import React, { FC, useLayoutEffect } from 'react'
import cls from 'classnames'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { IDefaultComponentProps } from '../../lib/types/component.types'
import styles from './google-button.module.scss'
import GoogleIcon from '../../icons/google-icon'
import { ROUTES } from '../../lib/constants/routes.const'

export const GoogleButton: FC<IDefaultComponentProps> = ({ style, className }) => {
  const { status } = useSession()
  const router = useRouter()

  useLayoutEffect(() => {
    if (status === 'authenticated') {
      router.replace(ROUTES.HOME)
    }
  }, [status])

  return (
    <div style={style} className={cls(className, styles.wrapper)} aria-hidden onClick={() => signIn()}>
      <GoogleIcon />
      <span>Connect with google</span>
    </div>
  )
}
