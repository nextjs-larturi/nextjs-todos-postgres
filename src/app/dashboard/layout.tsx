// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12

import { Sidebar, TopMenu } from '@/components'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  return (
    <>
      <Sidebar session={session} />

      <div className='ml-auto bg-gray-200 mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-[calc(100vh-5px)]'>
        <TopMenu />
        <div className='bg-white rounded-md m-3 p-6 h-[calc(100vh-90px)]'>{children}</div>
      </div>
    </>
  )
}
