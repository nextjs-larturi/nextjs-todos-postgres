'use server'

import prisma from '@/lib/prisma'
import { Todo } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const toggleTodoAction = async (id: string, complete: boolean): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } })

  if (!todo) {
    throw new Error(`Todo with id ${id} not found`)
  }

  const updatedTodo = await prisma.todo.update({ where: { id }, data: { complete } })

  revalidatePath('/dashboard/server-actions-todos')
  return updatedTodo
}

export const addTodoAction = async (description: string) => {
  try {
    const todo = await prisma.todo.create({ data: { description } })

    revalidatePath('/dashboard/server-actions-todos')

    return todo
  } catch (error) {
    return {
      message: 'Error creating todo'
    }
  }
}