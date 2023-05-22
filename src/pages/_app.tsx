import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { type AppProps } from 'next/app'
import { api } from '@/utils/api'
import '@/styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import { type NextPage } from 'next'
import AppLayout from '@/components/layout/AppLayout'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout<P = object> = AppProps<P> & {
  Component: NextPageWithLayout
}

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout<{ session: Session | null }>) => {
  const getLayout = Component.getLayout || ((page) => <AppLayout>{page}</AppLayout>)
  return (
    <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>
  )
}

export default api.withTRPC(MyApp)
