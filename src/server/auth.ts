import { PrismaAdapter } from '@auth/prisma-adapter'
import { type DefaultSession } from 'next-auth'
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

import { db } from '@/server/db'

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user']
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [Google],
  // pages: {
  //   signIn: '/login',
  //   signOut: '/logout',
  // },
})
