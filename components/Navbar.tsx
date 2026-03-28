'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation } from '@/lib/data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/5 py-2'
            : 'bg-transparent py-4'
        )}
      >
        <nav className="container-width">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <div className="flex items-center gap-2">
                <div className={cn(
                  'w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-xl transition-colors duration-300',
                  isScrolled ? 'bg-saffron-500 text-white' : 'bg-white text-saffron-600'
                )}>
                  R
                </div>
                <div className="flex flex-col">
                  <span className={cn(
                    'font-display font-bold text-lg leading-tight transition-colors duration-300',
                    isScrolled ? 'text-navy-900' : 'text-white'
                  )}>
                    Ravindra IAS
                  </span>
                  <span className={cn(
                    'text-xs font-medium tracking-wider transition-colors duration-300',
                    isScrolled ? 'text-saffron-600' : 'text-saffron-400'
                  )}>
                    EXCELLENCE IN CIVIL SERVICES
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 font-medium transition-colors duration-200 group',
                    isScrolled ? 'text-navy-700 hover:text-saffron-600' : 'text-white/90 hover:text-white'
                  )}
                >
                  {item.name}
                  <span className={cn(
                    'absolute bottom-0 left-4 right-4 h-0.5 bg-saffron-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100',
                    pathname === item.href && 'scale-x-100'
                  )} />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  'px-6 py-2.5 rounded-full font-semibold transition-all duration-300',
                  isScrolled
                    ? 'bg-saffron-500 text-white hover:bg-saffron-600 hover:shadow-lg hover:shadow-saffron-500/25'
                    : 'bg-white text-navy-900 hover:bg-saffron-500 hover:text-white'
                )}
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-lg transition-colors duration-200',
                isScrolled ? 'bg-navy-100 text-navy-900' : 'bg-white/10 text-white backdrop-blur-sm'
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-lg lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="h-full flex flex-col pt-24 px-6"
            >
              <nav className="flex flex-col gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block py-4 px-4 text-2xl font-display font-semibold rounded-xl transition-all duration-200',
                        pathname === item.href
                          ? 'bg-saffron-500/20 text-saffron-400'
                          : 'text-white hover:bg-white/5 hover:text-saffron-400'
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pb-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 bg-saffron-500 text-white text-center font-semibold rounded-xl"
                >
                  Enroll Now
                </Link>
                <p className="text-center text-navy-400 text-sm mt-4">
                  Call us: +91 98765 43210
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
