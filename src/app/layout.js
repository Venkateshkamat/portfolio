import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Venkatesh Kamat - Software Engineer',
  description: 'Software Engineer portfolio showcasing projects and experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
        <head>
        {/* Open Graph tags */}
        <meta property="og:title" content="Venkatesh Kamat | Portfolio" />
        <meta property="og:description" content="My portfolio showcasing projects in blockchain, databases, and web development." />
        <meta property="og:image" content="https://venkateshkamat.github.io/portfolio/og-image.png" />
        <meta property="og:url" content="https://venkateshkamat.github.io/portfolio" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Venkatesh Kamat | Portfolio" />
        <meta name="twitter:description" content="My portfolio showcasing projects in blockchain, databases, and web development." />
        <meta name="twitter:image" content="https://venkateshkamat.github.io/portfolio/og-image.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}