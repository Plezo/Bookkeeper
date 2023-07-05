import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Market Info',
  description: 'Aggregate of all things market related',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className='bg-black h-screen overflow-hidden'>
            <main className='flex'>
              <Header />
              <Sidebar />
              {children}
            </main>
          </div>
        </body>
      </Providers>
    </html>
  )
}
