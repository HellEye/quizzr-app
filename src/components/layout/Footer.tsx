import React from 'react'

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center gap-8 bg-bg-400 px-16 py-8 text-xs">
      <p className="text-italic">Quizzr made by HellEye</p>
      <p className="ml-auto">
        contact:{' '}
        <a href="mailto:thehelleye+quizzr@gmail.com" className="text-accent-200">
          Email
        </a>
      </p>
    </footer>
  )
}

export default Footer
