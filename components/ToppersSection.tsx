'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, Award } from 'lucide-react'
import { toppers } from '@/lib/data'
import AnimatedCounter from './AnimatedCounter'

export default function ToppersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % toppers.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 bg-saffron-500/20 text-saffron-400 rounded-full text-sm font-medium mb-4"
          >
            Our Success Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="heading-lg text-white mb-4"
          >
            Meet Our <span className="text-gradient">Toppers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-navy-300 text-lg"
          >
            Their success is our legacy. Join the league of achievers who made their dreams come true.
          </motion.p>
        </div>

        {/* Featured Topper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-8 md:p-12 border border-saffron-500/20 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-saffron-500/20">
              <Quote className="w-24 h-24" />
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-center">
              {/* Image */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-saffron-500/30">
                    <Image
                      src={toppers[activeIndex].image}
                      alt={toppers[activeIndex].name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-saffron-500 rounded-xl flex items-center justify-center shadow-lg shadow-saffron-500/30">
                    <span className="text-white font-bold text-xl">#{activeIndex + 1}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                  ))}
                </div>

                <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 italic">
                  "{toppers[activeIndex].message}"
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-4">
                  <h3 className="font-display font-bold text-2xl text-white">
                    {toppers[activeIndex].name}
                  </h3>
                  <span className="px-3 py-1 bg-saffron-500 text-white text-sm font-bold rounded-full">
                    {toppers[activeIndex].rank}
                  </span>
                </div>

                <p className="text-navy-400">
                  UPSC CSE {toppers[activeIndex].year} • {toppers[activeIndex].attempt}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div
              className="flex justify-center gap-2 mt-8"
              role="tablist"
              aria-label="Topper carousel navigation"
            >
              {toppers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight') {
                      e.preventDefault()
                      setActiveIndex((index + 1) % toppers.length)
                    } else if (e.key === 'ArrowLeft') {
                      e.preventDefault()
                      setActiveIndex((index - 1 + toppers.length) % toppers.length)
                    }
                  }}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`View ${toppers[index].name}, ${toppers[index].rank}`}
                  tabIndex={index === activeIndex ? 0 : -1}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2 focus:ring-offset-navy-900 ${
                    index === activeIndex
                      ? 'bg-saffron-500 w-8'
                      : 'bg-navy-600 hover:bg-navy-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Topper Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppers.map((topper, index) => (
            <motion.div
              key={topper.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -4 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? 'border-saffron-500 shadow-lg shadow-saffron-500/10'
                  : 'border-navy-700/50 hover:border-saffron-500/50'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-navy-600 img-hover-zoom">
                    <Image
                      src={topper.image}
                      alt={topper.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-saffron-500 rounded-full flex items-center justify-center">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{topper.name}</h4>
                  <span className="text-saffron-400 text-sm font-bold">{topper.rank}</span>
                </div>
              </div>
              <p className="text-navy-400 text-sm line-clamp-2">{topper.message}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-16 relative overflow-hidden bg-gradient-to-r from-saffron-600 via-saffron-500 to-gold-500 rounded-2xl p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-saffron-600/90 via-saffron-500/90 to-gold-500/90" />
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { end: 500, suffix: '+', label: 'Selections in 2024' },
                { end: 12, suffix: '', label: 'Top 10 Ranks' },
                { end: 45, suffix: '+', label: 'Interview Recommendations' },
                { end: 98, suffix: '%', label: 'Student Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
