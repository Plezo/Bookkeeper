'use client'

import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"

function Main() {
  const { data: session } = useSession();
  return (
    <div>
      <header className='absolute top-5 right-8'>
        <div
        className='flex items-center space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 bg-black text-white'
        onClick={signOut}>
          <Image 
          className='rounded-full w-10 h-10'
          src={session?.user.image}
          width={500}
          height={500}
          alt=''
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>
      </header>
    </div>
  )
}

export default Main