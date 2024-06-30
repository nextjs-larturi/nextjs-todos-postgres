export const dynamic = 'force-dynamic'
export const revalidate = 0

import { getServerUserSession } from '@/auth/actions/auth-actions'
import prisma from '@/lib/prisma'
import { NewTodo, TodosGrid } from '@/todos'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Rest Todos Page',
  description: 'Rest Todos Page'
}

export default async function RestTodosPage() {
  const user = await getServerUserSession()

  if (!user) redirect('/api/auth/signin')

  const todos = await prisma.todo.findMany({
    where: { userId: user!.id },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div>
      <h1 className='text-4xl'>REST Todos</h1>
      <hr className='mb-5 mt-3' />

      <div className='w-full px-5 mx-5 mb-5 mt-8'>
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  )
}
