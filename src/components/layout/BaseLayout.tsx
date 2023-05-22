import React from 'react'
import Footer from './Footer'
import { Header } from '@/components/user/Header'
import Head from 'next/head'

const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <title>Quizzr</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default BaseLayout
