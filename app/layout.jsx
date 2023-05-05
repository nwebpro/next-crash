import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import './globals.css'

export const inter = Inter({ 
  subsets: ['latin']
})
export const metadata = {
  title: 'Ab Naeem',
  description: 'Learning to code, one day at a time.',
  keywords: 'web development, programming, javascript, react, nextjs',
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout