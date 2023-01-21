import NextAuth, { type NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import CredentialProvider from 'next-auth/providers/credentials'
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { env } from '../../../env/server.mjs'
import { prisma } from '../../../server/db'
import { z } from 'zod'
import bcrypt from 'bcrypt'
const credentialsValidator = z.object({
  email: z.string().email(),
  password: z.string(),
})
export const authOptions: NextAuthOptions = {
  // Include user.id on session
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: env.JWT_SECRET,
  },
  secret: env.JWT_SECRET,
  callbacks: {
    session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id
      }
      return session
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialProvider({
      name: 'Email/Password',
      type: 'credentials',
      id: 'email',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials) return null
        credentialsValidator.parse(credentials)
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          })
          if (!user) return null
          if (!user.password) return null
          const valid = await bcrypt.compare(credentials.password, user.password)
          if (!valid) return null
          user.password = null
          return user
        } catch (error) {
          return null
        }
      },
    }),
    DiscordProvider({
      id: 'discord',
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
}

export default NextAuth(authOptions)
