import prisma from '@/lib/prisma'
import { Todo } from '@prisma/client'
import { NextResponse } from 'next/server'
import * as yup from 'yup'

interface Segments {
  params: {
    id: string
  }
}

const getTodo = async (id: string): Promise<Todo | undefined> => {
  const todo = await prisma.todo.findUnique({ where: { id } })
  if (!todo) return undefined

  return todo
}

export async function GET(request: Request, { params }: Segments) {
  const todo = await getTodo(params.id)
  if (!todo) {
    return NextResponse.json({ message: `Todo with id ${params.id} not found` }, { status: 404 })
  }

  return NextResponse.json(todo)
}

const postSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional()
})

export async function PUT(request: Request, { params }: Segments) {
  const allowedFields = Object.keys(postSchema.describe().fields).join(', ')

  const { id } = params
  const todo = await getTodo(id)

  if (!todo) {
    return NextResponse.json({ message: `Todo with id ${params.id} not found` }, { status: 404 })
  }

  const body = await request.json()

  try {
    const updatedTodo = await prisma.todo.update({ where: { id }, data: { ...body } })
    return NextResponse.json(updatedTodo)
  } catch (error) {
    return NextResponse.json({ message: `Invalid body. Only allowed: [${allowedFields}]` })
  }
}
