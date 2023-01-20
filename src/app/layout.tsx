'use client'
import '../styles/globals.css'

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Quizzr</title>
        <meta name="description" content="(WIP) Create and solve quizzes to learn faster" />
        <meta name="author" content="HellEye" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full w-full bg-bg-300 text-text-300 ">{children}</body>
    </html>
  )
}
export default RootLayout
