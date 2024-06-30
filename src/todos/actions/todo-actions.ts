'use server'

import { getServerUserSession } from '@/auth/actions/auth-actions'
import prisma from '@/lib/prisma'
import { Todo } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const sleep = async (seconds: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}

export const toggleTodoAction = async (id: string, complete: boolean): Promise<Todo> => {
  await sleep(3)

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
    const user = await getServerUserSession()

    if (!user) redirect('/api/auth/signin')

    const todo = await prisma.todo.create({ data: { description, userId: user!.id } })

    revalidatePath('/dashboard/server-actions-todos')

    return todo
  } catch (error) {
    return {
      message: 'Error creating todo'
    }
  }
}

export const deleteTodoAction = async () => {
  try {
    const todo = await prisma.todo.deleteMany({ where: { complete: true } })
    revalidatePath('/dashboard/server-actions-todos')
    return todo
  } catch (error) {
    return {
      message: 'Error deleting todo'
    }
  }
}
