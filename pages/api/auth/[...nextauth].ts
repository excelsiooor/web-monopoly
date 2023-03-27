import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { requireEnv } from '../../../lib/helpers/require-env'

const client_id = requireEnv('NEXT_PUBLIC_GOOGLE_CLIENT_ID', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
const client_secret = requireEnv('NEXT_PUBLIC_GOOGLE_SECRET', process.env.NEXT_PUBLIC_GOOGLE_SECRET)

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: client_id,
      clientSecret: client_secret,
    }),
  ],
  secret: 'SECRET',
})
