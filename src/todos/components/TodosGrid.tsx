'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Todo } from '@prisma/client'
import TodoItem from './TodoItem'

import * as todosApi from '@/todos/helpers/todos-helper'
import { toggleTodoAction } from '../actions/todo-actions'

interface Props {
  todos?: Todo[]
}

export default function TodosGrid({ todos }: Props) {
  const router = useRouter()
  const pathName = usePathname()

  const toggleTodo = async (id: string, complete: boolean) => {
    if (pathName === '/dashboard/server-actions-todos') {
      // dashboard/server-actions-todos
      toggleTodoAction(id, complete)
    } else {
      // dashboard/rest-todos
      todosApi.updateTodo(id, complete)
      router.refresh()
    }
  }

  return (
    <div className='grid -grid-cols-1 sm:grid-cols-3 gap-2'>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}
