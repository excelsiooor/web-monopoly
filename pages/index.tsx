import * as React from 'react'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ROUTES } from '../lib/constants/routes.const'

const IndexPage: NextPage = () => {
  const { status } = useSession({ required: true })
  const router = useRouter()

  React.useEffect(() => {
    if (status === 'authenticated') {
      router.replace(ROUTES.HOME)
    } else {
      router.replace(ROUTES.SIGN_UP)
    }
  }, [status])

  return null
}

export default IndexPage
