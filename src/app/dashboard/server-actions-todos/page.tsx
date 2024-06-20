export const dynamic = 'force-dynamic'
export const revalidate = 0

import prisma from '@/lib/prisma'
import { NewTodo, TodosGrid } from '@/todos'

export const metadata = {
  title: 'Server Actions Todos Page',
  description: 'Server Actions Todos Page'
}

export default async function ServerActionsTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: 'desc' } })
  console.log('contruido')

  return (
    <div>
      <h1 className='text-4xl mt-2 mb-10'>Server Actions Todos</h1>

      <div className='w-full px-5 mx-5 mb-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  )
}
