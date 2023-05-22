import { Suspense } from 'react'
import { Header } from '@/components/user/Header'
import Sidebar from './Sidebar'
import Head from 'next/head'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Head>
        <title>Quizzr</title>
      </Head>
      <div className="flex h-full w-full flex-col">
        <Header />
        <div className="flex h-full w-full flex-row items-stretch">
          <Sidebar />
          <main className="h-full w-full">{children}</main>
        </div>
      </div>
    </Suspense>
  )
}

export default AppLayout
