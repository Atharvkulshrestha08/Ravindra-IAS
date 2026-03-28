'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Clock, Users, Check, ArrowRight, BookOpen, Award } from 'lucide-react'
import { courses } from '@/lib/data'

export default function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState('all')

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(c => c.category === activeTab)

  return (
    <section ref={sectionRef} className="section-padding bg-white relative">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium mb-4"
          >
            Our Programs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="heading-lg text-navy-900 mb-4"
          >
            Choose Your Path to{' '}
            <span className="text-gradient">Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-navy-600 text-lg"
          >
            Comprehensive courses designed to guide you through every stage of the UPSC journey
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          role="tablist"
          aria-label="Filter courses by category"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {[
            { id: 'all', label: 'All Courses' },
            { id: 'comprehensive', label: 'Foundation' },
            { id: 'prelims', label: 'Prelims' },
            { id: 'mains', label: 'Mains' },
            { id: 'optional', label: 'Optional' },
            { id: 'interview', label: 'Interview' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => {
                const tabs = [
                  { id: 'all', label: 'All Courses' },
                  { id: 'comprehensive', label: 'Foundation' },
                  { id: 'prelims', label: 'Prelims' },
                  { id: 'mains', label: 'Mains' },
                  { id: 'optional', label: 'Optional' },
                  { id: 'interview', label: 'Interview' },
                ]
                const currentIndex = tabs.findIndex(t => t.id === tab.id)
                if (e.key === 'ArrowRight') {
                  e.preventDefault()
                  const nextIndex = (currentIndex + 1) % tabs.length
                  setActiveTab(tabs[nextIndex].id)
                } else if (e.key === 'ArrowLeft') {
                  e.preventDefault()
                  const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length
                  setActiveTab(tabs[prevIndex].id)
                }
              }}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls="courses-panel"
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-saffron-500 text-white shadow-lg shadow-saffron-500/25'
                  : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Course Cards */}
        <div
          id="courses-panel"
          role="tabpanel"
          aria-label={`${activeTab} courses`}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -8 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`relative bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/15 group ${
                course.popular 
                  ? 'border-saffron-500 shadow-lg' 
                  : 'border-navy-100 hover:border-saffron-200'
              }`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-saffron-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  course.popular ? 'bg-saffron-500' : 'bg-navy-100 group-hover:bg-saffron-100 transition-colors'
                }`}>
                  <BookOpen className={`w-7 h-7 ${
                    course.popular ? 'text-white' : 'text-navy-600 group-hover:text-saffron-600 transition-colors'
                  }`} />
                </div>

                <h3 className="font-display font-bold text-xl text-navy-900 mb-2">{course.title}</h3>
                <p className="text-navy-600 text-sm mb-4 leading-relaxed">{course.description}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-navy-500">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-navy-500">
                    <Users className="w-4 h-4" />
                    {course.mode}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {course.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-navy-700">
                      <Check className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {course.features.length > 3 && (
                    <li className="text-xs text-saffron-600 font-medium">
                      +{course.features.length - 3} more features
                    </li>
                  )}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-navy-100">
                  <div>
                    <span className="text-2xl font-bold text-navy-900">{course.price}</span>
                    <span className="text-xs text-navy-500 block">Full Course Fee</span>
                  </div>
                  <Link
                    href={`/courses#course-${course.id}`}
                    className={`flex items-center gap-2 font-semibold text-sm transition-colors ${
                      course.popular
                        ? 'text-saffron-600 hover:text-saffron-700'
                        : 'text-navy-700 hover:text-saffron-600'
                    }`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/courses" className="btn-secondary">
            View All Courses
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
