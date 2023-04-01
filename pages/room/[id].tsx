import { useRouter } from 'next/router'
import { FC } from 'react'
import { MainContainer } from '../../components/main-container'
import { UsersBoard } from '../../components/users-board'
import { GameBoard } from '../../components/game-board'
import { ChatBoard } from '../../components/chat-board'
import { mockUsers } from '../../lib/constants/mock-values'

const RoomPage: FC = () => {
  const router = useRouter()

  const { id } = router.query

  return (
    <MainContainer style={{ justifyContent: 'space-between', gap: 10, padding: 10 }}>
      <UsersBoard users={mockUsers} />
      <GameBoard />
      <ChatBoard />
    </MainContainer>
  )
}

export default RoomPage
