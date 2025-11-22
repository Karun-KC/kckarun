import type { Metadata } from 'next'
import '@fontsource/outfit'
import '@fontsource/roboto'
import '../index.css'

export const metadata: Metadata = {
  title: 'Karun KC - Portfolio',
  description: 'Portfolio of Karun KC - Electronics Engineer and Network Security Specialist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
