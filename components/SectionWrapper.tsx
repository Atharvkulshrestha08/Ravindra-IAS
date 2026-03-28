'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface GradientTransitionProps {
  children: React.ReactNode
  className?: string
  fromColor?: 'navy' | 'white' | 'navy-light'
  toColor?: 'navy' | 'white' | 'navy-light'
  direction?: 'bottom' | 'top'
}

const colorMap = {
  'navy': 'from-navy-900',
  'white': 'from-white',
  'navy-light': 'from-navy-50',
}

const colorMapTo = {
  'navy': 'to-navy-900',
  'white': 'to-white',
  'navy-light': 'to-navy-50',
}

export default function SectionWrapper({ 
  children, 
  className = '', 
  fromColor = 'white',
  toColor = 'white',
  direction = 'bottom'
}: GradientTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
      
      {/* Top Gradient Fade */}
      {direction === 'bottom' && (
        <>
          <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${colorMap[fromColor]} to-transparent pointer-events-none`} />
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-saffron-500/30 to-transparent pointer-events-none"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </>
      )}
      
      {/* Bottom Gradient Fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${colorMapTo[toColor]} from-transparent pointer-events-none`} />
    </div>
  )
}
