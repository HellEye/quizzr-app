'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Spinner from '@ui/Spinner'
import Avatar from '@ui/Avatar'

const UserDisplay = () => {
  const session = useSession()
  if (typeof window === undefined || session.status === 'loading') return <Spinner />
  if (session.status === 'unauthenticated' || !session?.data?.user)
    return (
      <button
        className="rounded-md  bg-accent-700 px-4 py-2 text-xl shadow-lg hover:bg-accent-500"
        onClick={session.data ? () => signOut() : () => signIn()}
      >
        {session.data ? 'Sign out' : 'Sign in'}
      </button>
    )

  return (
    <div className="flex flex-col items-center gap-2">
      <Avatar url={session?.data?.user?.image} width={32} height={32} />
      <div className="text-sm text-text-300">{session.data.user.name}</div>
    </div>
  )
}

export default UserDisplay
