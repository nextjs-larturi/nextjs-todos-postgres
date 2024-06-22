import { cookies } from 'next/headers'
import { TabBar } from '@/components'

export const metadata = {
  title: 'Cookies Page',
  description: 'Cookies Page'
}

export default function CookiesPage() {
  const cookiesStore = cookies()
  const cookieTab = Number(cookiesStore.get('selectedTab')?.value ?? '1')

  return (
    <div className='gris gris-cols-1 sm:grid-cols-2 gap-3'>
      <div className='flex flex-col'>
        <h1 className='text-4xl'>Cookies Tabs</h1>
        <hr className='mb-5 mt-3' />
        <div className='pt-7 lg:w-1/2 md:w-1/2 w-full'>
          <TabBar currentTab={cookieTab} />
        </div>
      </div>
    </div>
  )
}
