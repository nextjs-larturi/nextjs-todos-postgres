'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function ProfilePage() {
  const { data: session } = useSession()

  useEffect(() => {
    console.log('client Side')
    console.log(session)
  }, [session])

  return (
    <div className='gris gris-cols-1 sm:grid-cols-2 gap-3'>
      <div className='flex flex-col'>
        <h1 className='text-4xl'>Profile User (Client Side)</h1>
        <hr className='mb-5 mt-3' />
        <div className='pt-7 lg:w-10/12 md:w-10/12 w-full'>
          <p>Id: {session?.user?.id ?? 'No Id'}</p>
          <p>Name: {session?.user?.name ?? 'Anonymous'}</p>
          <p>Email: {session?.user?.email ?? 'No email'}</p>
          <p>Image: {session?.user?.image ?? 'No image'}</p>
          <p>Roles: {session?.user?.roles?.join(', ') ?? 'No Roles'}</p>
        </div>
      </div>
    </div>
  )
}
