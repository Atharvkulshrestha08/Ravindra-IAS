'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  { year: '2009', title: 'Founded', description: 'Established by Dr. Ravindra Kumar, former IAS officer' },
  { year: '2012', title: 'First Top 10', description: 'Our first student secured AIR 8 in UPSC CSE' },
  { year: '2015', title: '1000+ Selections', description: 'Crossed milestone of 1000 successful candidates' },
  { year: '2018', title: 'Online Launch', description: 'Introduced hybrid learning model' },
  { year: '2021', title: 'Digital Transformation', description: 'AI-powered personalization introduced' },
  { year: '2024', title: '2500+ Selections', description: 'Continuing our legacy of success' },
]

function MilestoneCard({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const isRight = index % 2 === 0

  return (
    <div ref={ref} className="relative">
      {/* Mobile: Full width card with dot on left */}
      <div className="flex gap-4 md:hidden">
        {/* Dot */}
        <div className="relative flex flex-col items-center">
          <motion.div
            className="w-3 h-3 rounded-full bg-saffron-500 border-2 border-white z-10"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="w-0.5 flex-1 bg-saffron-500 mt-1"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.3 }}
            style={{ originY: 0 }}
          />
        </div>

        {/* Card */}
        <motion.div
          className="flex-1 pb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-white p-4 rounded-xl shadow-md">
            <span className="inline-block px-2.5 py-1 bg-saffron-500 text-white rounded-full text-xs font-bold mb-2">
              {milestone.year}
            </span>
            <h3 className="font-semibold text-navy-900 text-sm mb-1">{milestone.title}</h3>
            <p className="text-navy-600 text-xs">{milestone.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Desktop: Alternating layout */}
      <div className="hidden md:flex items-center min-h-[120px]">
        {/* Left Card */}
        <motion.div
          className={`flex-1 ${isRight ? 'pr-16' : ''}`}
          initial={{ opacity: 0, x: isRight ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? 40 : -40 }}
          transition={{ duration: 0.5 }}
        >
          {isRight && (
            <div className="bg-white p-5 rounded-xl shadow-md">
              <span className="inline-block px-3 py-1 bg-saffron-500 text-white rounded-full text-sm font-bold mb-3">
                {milestone.year}
              </span>
              <h3 className="font-semibold text-navy-900 text-base mb-1">{milestone.title}</h3>
              <p className="text-navy-600 text-sm">{milestone.description}</p>
            </div>
          )}
        </motion.div>

        {/* Center Dot and Line */}
        <div className="relative flex flex-col items-center z-10">
          <motion.div
            className="w-4 h-4 rounded-full bg-saffron-500 border-3 border-white"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <motion.div
            className="w-0.5 flex-1 bg-saffron-500 mt-1"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.3 }}
            style={{ originY: 0 }}
          />
        </div>

        {/* Right Card */}
        <motion.div
          className={`flex-1 ${!isRight ? 'pl-16' : ''}`}
          initial={{ opacity: 0, x: !isRight ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: !isRight ? -40 : 40 }}
          transition={{ duration: 0.5 }}
        >
          {!isRight && (
            <div className="bg-white p-5 rounded-xl shadow-md">
              <span className="inline-block px-3 py-1 bg-saffron-500 text-white rounded-full text-sm font-bold mb-3">
                {milestone.year}
              </span>
              <h3 className="font-semibold text-navy-900 text-base mb-1">{milestone.title}</h3>
              <p className="text-navy-600 text-sm">{milestone.description}</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default function Timeline() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: false, amount: 0.5 })

  return (
    <section className="section-padding bg-navy-50 overflow-hidden">
      <div className="container-width">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium mb-4">
            Our Legacy
          </span>
          <h2 className="heading-lg text-navy-900 mb-4">Our Journey</h2>
          <p className="text-navy-600 text-lg">
            From a small coaching center to India&apos;s leading UPSC institute, scroll to witness our evolution.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main vertical line */}
          <div className="absolute left-[14px] md:left-1/2 top-0 bottom-0 w-0.5 bg-saffron-500" style={{ transform: 'translateX(-50%)' }} />

          {/* Milestones */}
          <div className="space-y-8 md:space-y-0">
            {milestones.map((milestone, index) => (
              <MilestoneCard
                key={milestone.year}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>

          {/* Final Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="mt-12 md:mt-16 flex justify-center"
          >
            <div className="px-6 py-3 bg-saffron-500 rounded-full text-white font-bold shadow-md flex items-center gap-3">
              <span className="text-xl">🏆</span>
              <span>2500+ Success Stories</span>
              <span className="text-xl">🎯</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
