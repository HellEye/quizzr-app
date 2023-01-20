import Link from 'next/link'
import React from 'react'
import WithSession from '../../Components/util/hack/WithSession'
import UserDisplay from '../../Components/user/UserDisplay'

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/app', label: 'Browse' },
  { href: '/tech', label: 'Tech' },
]

const Header = () => {
  return (
    <header className="visible flex h-32 flex-row items-center gap-32 bg-bg-400 p-4">
      <Link href="/">
        <h1 className="font-logo text-6xl text-text-300">Quizzr</h1>
      </Link>
      <nav className="invisible lg:visible">
        <ul className="flex flex-row gap-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`} className="text-text-300 hover:text-text-400">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="ml-auto" />
      <WithSession>
        <UserDisplay />
      </WithSession>
    </header>
  )
}

export { Header }
