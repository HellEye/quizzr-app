import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
const loadColorMode = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') {
    return 'dark'
  }
  return (window.localStorage.getItem('colorMode') as 'light' | 'dark') || 'dark'
}
const ColorModeSwitcher = () => {
  const [colorMode, setColorMode] = useState<'dark' | 'light'>('dark')

  const toggleColorMode = () => {
    setColorMode((prev) => {
      localStorage.setItem('colorMode', prev === 'dark' ? 'light' : 'dark')
      return prev === 'dark' ? 'light' : 'dark'
    })
  }
  useEffect(() => {
    if (colorMode === 'dark') document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }, [colorMode])
  useEffect(() => {
    setColorMode(loadColorMode())
  }, [])
  const Icon = colorMode === 'dark' ? FaSun : FaMoon
  return <Icon onClick={toggleColorMode} className="cursor-pointer" />
}

export default ColorModeSwitcher
