import Link from 'next/link'
import React from 'react'
import UserDisplay from './UserDisplay'
import { type LinkProps } from 'next/link'
import ColorModeSwitcher from '../util/ColorModeSwitcher'
const links: { href: LinkProps['href']; label: string }[] = [
  { href: '/', label: 'Home' },
  // { href: '/features', label: 'Features' },
  { href: '/app', label: 'App' },
  // { href: '/tech', label: 'Tech' },
]

const Header = () => {
  return (
    <header className="visible col-span-2 flex h-32 w-full flex-shrink-0 flex-row items-center gap-32 bg-background-2 p-4">
      <Link href="/">
        <h1 className="font-logo text-text-300 text-6xl">Quizzr</h1>
      </Link>
      <nav className="invisible lg:visible">
        <ul className="flex flex-row gap-4">
          {links.map(({ href, label }) => (
            <li key={label} className="text-text-300 hover:text-text-400">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="ml-auto" />
      <div className="flex flex-row items-center gap-4">
        <ColorModeSwitcher />
        <UserDisplay />
      </div>
    </header>
  )
}

export { Header }
