import React, { FC, useEffect, useState } from 'react'
import cls from 'classnames'
import { useSession, signIn } from 'next-auth/react'
import { IDefaultComponentProps } from '../../lib/types/component.types'
import styles from './google-button.module.scss'
import GoogleIcon from '../../icons/google-icon'
import { useGoogleLoginMutaion } from '../../lib/hooks/use-google-login'

export const GoogleButton: FC<IDefaultComponentProps> = ({ style, className }) => {
  const [isFirstHandle, setIsFirstHandle] = useState(true)
  const { mutate } = useGoogleLoginMutaion()

  const { data: session } = useSession()

  useEffect(() => {
    if (session && session.user && session.user.name && session.user.email && session.user.image && isFirstHandle) {
      setIsFirstHandle(false)
      mutate({
        name: session.user?.name,
        email: session.user?.email,
        image: session.user?.image,
      })
    }
  }, [session])

  return (
    <div style={style} className={cls(className, styles.wrapper)} aria-hidden onClick={() => signIn()}>
      <GoogleIcon />
      <span>Connect with google</span>
    </div>
  )
}
