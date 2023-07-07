import './globals.css'
import React from 'react';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marmoraria Santa Rosa',
  description: 'Marmoraria Santa Rosa ',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href='/favicon/favicon.ico'/>
        <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.pnq"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png"/>
        <link rel="manifest" href="./favicon/site.webmanifest"/>
      </head>
      <meta charSet="UTF-8"/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}


