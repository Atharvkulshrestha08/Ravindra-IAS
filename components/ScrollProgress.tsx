'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / scrollHeight) * 100
      setScrollProgress(progress)
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed top-0 left-0 right-0 z-[100] h-1 bg-navy-900/20"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-saffron-500 via-gold-500 to-saffron-500"
            style={{ width: `${scrollProgress}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
