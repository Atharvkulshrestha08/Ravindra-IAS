import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollProgress from '@/components/ScrollProgress'
import Toast from '@/components/Toast'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ravindra IAS | Best UPSC Coaching Institute in Delhi',
  description: 'Join India\'s premier UPSC coaching institute. Comprehensive preparation for Civil Services Examination with expert faculty, proven results, and personalized mentorship.',
  keywords: 'UPSC coaching, Civil Services, IAS preparation, Best coaching institute, Delhi',
  openGraph: {
    title: 'Ravindra IAS | Best UPSC Coaching Institute in Delhi',
    description: 'Join India\'s premier UPSC coaching institute with 15+ years of excellence.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-saffron-500 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
        <Toast />
      </body>
    </html>
  )
}
