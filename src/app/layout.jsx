import { Sen, Istok_Web, Playfair_Display } from 'next/font/google'
import './globals.scss'

const sen = Sen({
  subsets: ['latin'],
  weight: ["400"],
  variable: "--font-sen",
})

const istok = Istok_Web({
  subsets: ['latin'],
  weight: ["400", "700"],
  variable: "--font-istok",
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ["400"],
  variable: "--font-playfair",
})

export const metadata = {
  title: 'Alica Holmqvist',
  description: 'Person Portfolio by Alica Holmqvist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sen.variable} ${istok.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
