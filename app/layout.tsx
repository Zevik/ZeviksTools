import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Zevik's Tools",
  description: 'הכלים והתוכנות המתקדמים ביותר לבעלי עסקים, למשרדי דיגיטל ולמנהלי קבוצות'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
