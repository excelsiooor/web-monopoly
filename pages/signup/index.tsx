import React, { FC } from 'react'
import { Toaster } from 'react-hot-toast'
import { SugnUpContainer } from '../../components/sign-up-container'
import { GoogleButton } from '../../components/google-button'

const SignUpPage: FC = () => (
  <SugnUpContainer>
    <Toaster position="top-center" reverseOrder={false} />
    <GoogleButton />
  </SugnUpContainer>
)

export default SignUpPage
