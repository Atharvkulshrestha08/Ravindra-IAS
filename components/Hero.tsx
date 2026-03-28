'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let isRunning = true
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      speed: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const numParticles = Math.min(60, Math.floor(window.innerWidth / 20))
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          speed: Math.random() * 0.5 + 0.25,
        })
      }
    }

    const draw = () => {
      if (!isRunning) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#0a1929')
      gradient.addColorStop(0.3, '#1e3a5f')
      gradient.addColorStop(0.7, '#0f2744')
      gradient.addColorStop(1, '#0a1929')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx * p.speed
        p.y += p.vy * p.speed

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        const particleGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        particleGradient.addColorStop(0, `rgba(249, 115, 22, ${p.opacity})`)
        particleGradient.addColorStop(1, `rgba(234, 179, 8, ${p.opacity * 0.5})`)
        ctx.fillStyle = particleGradient
        ctx.fill()

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(draw)
    }

    const handleVisibilityChange = () => {
      isRunning = !document.hidden
      if (isRunning) {
        draw()
      }
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      isRunning = false
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const stats = [
    { end: 15, suffix: '+', label: 'Years of Excellence' },
    { end: 2500, suffix: '+', label: 'Successful Candidates' },
    { end: 120, suffix: '+', label: 'Top 100 Ranks' },
    { end: 18, suffix: '%', label: 'Success Rate' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Top Gradient Fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-900 to-transparent pointer-events-none" />

      {/* Bottom Gradient Fade to Next Section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      
      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron-500 to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 container-width text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-2.5 bg-gradient-to-r from-saffron-500/20 to-gold-500/20 border border-saffron-500/30 rounded-full text-saffron-300 text-sm font-medium tracking-wide">
            India's Premier UPSC Coaching Institute
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-xl text-white max-w-4xl mx-auto mb-8"
        >
          Your Journey to{' '}
          <span className="text-shimmer">Civil Services</span>{' '}
          Starts Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-navy-200 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Join 2500+ successful candidates who transformed their dreams into reality 
          with Ravindra IAS. Comprehensive preparation for Prelims, Mains & Interview.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/courses"
            className="btn-primary btn-premium text-lg px-10 py-4 group w-full sm:w-auto"
          >
            Explore Courses
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto px-10 py-4 text-lg font-semibold overflow-hidden rounded-lg transition-all duration-300 bg-white/10 border border-white/30 text-white hover:bg-white hover:text-navy-900"
          >
            <span className="relative z-10">Free Counseling</span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="group relative p-5 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-saffron-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-saffron-400 to-gold-400 bg-clip-text text-transparent">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-navy-300">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-saffron-400/70">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-saffron-400/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-saffron-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
