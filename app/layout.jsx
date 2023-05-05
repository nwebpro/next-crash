import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header/Header'

export const inter = Inter({ 
  subsets: ['latin']
})
export const metadata = {
  title: 'Ab Naeem',
  description: 'Learning to code, one day at a time.',
  keywords: 'web development, programming, javascript, react, nextjs',
}

const RootLayout = ({ children }) => {
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