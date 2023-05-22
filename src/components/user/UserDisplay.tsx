'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Spinner } from '@ui/Spinner'
import Avatar from '@ui/Avatar'
import { Button } from '@ui/button'

const UserDisplay = () => {
  const session = useSession()

  if (typeof window === undefined || session.status === 'loading') return <Spinner />
  if (session.status === 'unauthenticated' || !session?.data?.user)
    return (
      <Button
        variant="accent"
        size="lg"
        onClick={
          session.data
            ? () => {
                void signOut()
              }
            : () => {
                void signIn()
              }
        }
      >
        {session.data ? 'Sign out' : 'Sign in'}
      </Button>
    )

  return (
    <div className="relative flex flex-col items-center gap-2">
      <Avatar
        className={`${false ? 'ring-accent-500 ring-2' : ''} cursor-pointer`}
        // onClick={() => setOpen((prev) => !prev)}
        url={session?.data?.user?.image}
        width={32}
        height={32}
      />
      <div className="text-text-300 text-sm">{session.data.user.name}</div>
    </div>
  )
}

export default UserDisplay
