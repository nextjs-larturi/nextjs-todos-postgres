import prisma from '@/lib/prisma'
import { NewTodo, TodosGrid } from '@/todos'

export const metadata = {
  title: 'Rest Todos Page',
  description: 'Rest Todos Page'
}

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div>
      <h1 className='text-4xl mt-2 mb-10'>REST Todos</h1>

      <div className='w-full px-5 mx-5 mb-5'>
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  )
}
