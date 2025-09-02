import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Note Taking App',
  description: 'A modern note-taking application built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
      </body>
    </html>
  )
}