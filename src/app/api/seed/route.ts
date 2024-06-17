import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  await prisma.todo.deleteMany()

  const todo = await prisma.todo.createMany({
    data: [
      {
        description: 'Ir al supermercado',
        complete: true,
        createdAt: new Date('2024-06-10 12:00')
      },
      { description: 'Cocinar', createdAt: new Date('2024-06-10 12:01') },
      { description: 'Ordenar', createdAt: new Date('2024-06-10 12:02') },
      { description: 'Estudiar', createdAt: new Date('2024-06-10 12:03') },
      { description: 'Trabajar', createdAt: new Date('2024-06-10 12:04') },
      { description: 'Relax', createdAt: new Date('2024-06-10 12:05') }
    ]
  })

  return NextResponse.json({ message: 'Seed executed' })
}
