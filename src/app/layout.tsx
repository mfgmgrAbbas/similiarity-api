import cn from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter ({subsets: ['latin']})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      "bg-white text-slate-900 antialised", inter.className)}>
      <body>{children}</body>
    </html>
  )
}
