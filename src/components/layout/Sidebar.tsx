import { Link } from '@ui/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="col-span-1 h-full w-48 flex-shrink-0 bg-background-2 p-4">
      <div>
        <Link href="/app/quiz/new" variant="button" size="sm" color="accent">
          Create a new Quiz
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
