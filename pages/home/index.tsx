import { useSession } from 'next-auth/react'
import { MainContainer } from '../../components/main-container/main-container'
import { SetupAccount } from '../../components/setup-account/setup-account'

const HomePage = () => {
  const { data: session } = useSession({ required: true })

  return <MainContainer>{session && <SetupAccount session={session} />}</MainContainer>
}

export default HomePage
