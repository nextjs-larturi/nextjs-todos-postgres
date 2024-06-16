import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  await prisma.todo.deleteMany()

  const todo = await prisma.todo.createMany({
    data: [
      { description: 'Ir al supermercado', complete: true },
      { description: 'Cocinar' },
      { description: 'Ordenar' },
      { description: 'Estudiar' },
      { description: 'Trabajar' },
      { description: 'Relax' }
    ]
  })

  return NextResponse.json({ message: 'Seed executed' })
}
