import React from 'react'
import Footer from './Footer'
import { Header } from './Header'

const layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default layout
