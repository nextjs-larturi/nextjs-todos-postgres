import { WidgetItem } from '@/components'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div>
      <h1 className='text-4xl'>Wellcome Cynthia!</h1>
      <hr className='mb-5 mt-3' />

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
