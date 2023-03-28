import React, { FC } from 'react'
import { useSession } from 'next-auth/react'
import { MainContainer } from '../../components/main-container'
import { GoogleButton } from '../../components/google-button'
import { Loader } from '../../components/loader'

const SignUpPage: FC = () => {
  const { status } = useSession()

  return <MainContainer>{status === 'loading' ? <Loader /> : <GoogleButton />}</MainContainer>
}

export default SignUpPage
