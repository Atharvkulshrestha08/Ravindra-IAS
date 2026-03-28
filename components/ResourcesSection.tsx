'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Newspaper, Book, FileText, ClipboardList, Download, ArrowRight } from 'lucide-react'
import { resources } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Newspaper,
  Book,
  FileText,
  ClipboardList,
}

export default function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron-500/5 rounded-full blur-3xl" />

      <div className="container-width relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium mb-6"
            >
              Free Resources
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="heading-lg text-navy-900 mb-6"
            >
              Study Resources at{' '}
              <span className="text-gradient">Your Fingertips</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-navy-600 text-lg leading-relaxed mb-8"
            >
              Access comprehensive study materials, daily current affairs, and previous year papers absolutely free. Stay ahead in your preparation with our regularly updated resources.
            </motion.p>

            {/* Resources List */}
            <div className="space-y-4">
              {resources.map((resource, index) => {
                const Icon = iconMap[resource.icon]
                return (
                  <motion.a
                    key={resource.title}
                    href={resource.link}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-navy-50 rounded-xl hover:bg-saffron-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <Icon className="w-6 h-6 text-saffron-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-navy-900 group-hover:text-saffron-700 transition-colors">
                        {resource.title}
                      </h4>
                      <p className="text-sm text-navy-500">{resource.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-navy-400 group-hover:text-saffron-500 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Right Content - Featured Resource Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-saffron-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl" />

              <div className="relative">
                <div className="w-16 h-16 bg-saffron-500 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-display font-bold text-2xl mb-4">
                  UPSC 2024 Complete Study Plan
                </h3>

                <p className="text-navy-300 mb-8 leading-relaxed">
                  Download our comprehensive 365-day study plan covering all three stages of UPSC CSE. Includes daily targets, resource recommendations, and revision schedules.
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-navy-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    150+ Pages
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                    </svg>
                    Updated 2024
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    Free Download
                  </div>
                </div>

                <button className="flex items-center gap-3 bg-white text-navy-900 px-6 py-3 rounded-xl font-semibold hover:bg-saffron-50 transition-colors">
                  <Download className="w-5 h-5" />
                  Download Now
                </button>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-saffron-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
            >
              FREE
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
