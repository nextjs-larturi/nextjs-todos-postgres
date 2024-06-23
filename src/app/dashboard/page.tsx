import { WidgetItem } from '@/components'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div>
      <h1 className='text-4xl'>Wellcome Cynthia!</h1>
      <hr className='mb-5 mt-3' />

      <div className='flex flex-col mt-6'>
        <WidgetItem title='User conected (server side)'>
          <div>
            <div className='text-sm text-center text-gray-600'>Name: {session.user?.name}</div>
            <div className='text-sm text-center text-gray-600'>Email: {session.user?.email}</div>
            <div className='text-sm text-center text-gray-600'>Image: {session.user?.image}</div>
          </div>
        </WidgetItem>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6'>
        <Link href='/dashboard/rest-todos'>
          <WidgetItem title='Rest TODOs'>
            <p className='text-sm text-center text-gray-600'>
              Simple TODO app using the app/api directory from Next.js 14.
            </p>
          </WidgetItem>
        </Link>

        <Link href='/dashboard/server-actions-todos'>
          <WidgetItem title='Server Actions TODOs'>
            <p className='text-sm text-center text-gray-600'>
              Simple TODO app using the Server Actions from Next.js 14.
            </p>
          </WidgetItem>
        </Link>

        <Link href='/dashboard/cookies'>
          <WidgetItem title='Cookies Tab'>
            <p className='text-sm text-center text-gray-600'>
              Using next/headers and cookies from Next.js 14.
            </p>
          </WidgetItem>
        </Link>

        <Link href='/dashboard/products'>
          <WidgetItem title='Product Cart'>
            <p className='text-sm text-center text-gray-600'>
              Using with next/headers and cookies from Next.js 14
            </p>
          </WidgetItem>
        </Link>
      </div>
    </div>
  )
}
