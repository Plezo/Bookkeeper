'use client'

import { LockClosedIcon } from '@heroicons/react/24/solid'
import { signOut } from 'next-auth/react'

function Sidebar() {
  return (
    <div className='p-5 h-screen overflow-y-scroll scrollbar-hide bg-gray-900'>
        <div className='space-y-4'>
          <button
          className='flex p-5 items-center space-x-2 hover:text-white hover:bg-gray-800 active:bg-gray-700 rounded-lg' 
          onClick={signOut}
          >
            <LockClosedIcon className='h-5 w-5'/>
            <p>Sign out</p>
          </button>
        </div>
    </div>
  )
}

export default Sidebar