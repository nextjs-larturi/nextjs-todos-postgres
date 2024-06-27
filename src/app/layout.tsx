import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProider from '@/auth/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todos App - Next 14 App Router',
  description: 'Todos App - Next 14 App Router'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProider>
  )
}
