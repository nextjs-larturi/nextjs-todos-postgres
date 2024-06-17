import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import * as yup from 'yup'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const take = Number(searchParams.get('take') ?? '10')
  const skip = Number(searchParams.get('skip') ?? '0')

  if (isNaN(take)) return NextResponse.json({ message: 'Take must be a number' })
  if (isNaN(skip)) return NextResponse.json({ message: 'Skip must be a number' })

  const todos = await prisma.todo.findMany({
    take,
    skip,
    orderBy: { createdAt: 'desc' }
  })

  return NextResponse.json(todos)
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false)
})

export async function POST(request: Request) {
  const allowedFields = Object.keys(postSchema.describe().fields).join(', ')

  try {
    const body = await postSchema.validate(await request.json())
    const todo = await prisma.todo.create({ data: body })

    return NextResponse.json(todo)
  } catch (error) {
    return NextResponse.json(
      { message: `Invalid body. Only allowed: [${allowedFields}]` },
      { status: 400 }
    )
  }
}

// Elimina todos los Todos en estado Complete = true
export async function DELETE(request: Request) {
  try {
    await prisma.todo.deleteMany({
      where: { complete: true }
    })

    return NextResponse.json({ message: 'Todos with complete = true deleted' })
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting todos' })
  }
}
