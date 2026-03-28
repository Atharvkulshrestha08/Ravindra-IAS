'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Expert Faculty',
    description: 'Learn from IIT/IIM graduates and former civil servants with decades of experience.',
  },
  {
    icon: Users,
    title: 'Personal Mentorship',
    description: 'One-on-one guidance tailored to your strengths and areas of improvement.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Consistent track record of producing top ranks year after year.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Material',
    description: 'Curated study materials updated every quarter based on latest trends.',
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="section-padding bg-navy-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a1929' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-width relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium mb-6"
            >
              About Ravindra IAS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-lg text-navy-900 mb-6"
            >
              Building Tomorrow's{' '}
              <span className="text-gradient">Civil Servants</span>{' '}
              Today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-navy-600 text-lg leading-relaxed mb-6"
            >
              Founded in 2009 by Dr. Ravindra Kumar, a former IAS officer with 25 years of administrative experience, Ravindra IAS has emerged as India's most trusted coaching institute for UPSC Civil Services Examination preparation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-navy-600 text-lg leading-relaxed mb-8"
            >
              Our unique pedagogy combines traditional academic excellence with modern teaching methodologies. We don't just prepare students for an exam; we transform them into future leaders who will shape India's administrative landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule a Visit
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden img-hover-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
                    alt="Classroom learning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden img-hover-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop"
                    alt="Student discussion"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden img-hover-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop"
                    alt="Study session"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden img-hover-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop"
                    alt="Graduation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl shadow-navy-900/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-saffron-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-saffron-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy-900">15+ Years</div>
                  <div className="text-sm text-navy-500">Of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg shadow-navy-900/5 hover:shadow-xl hover:shadow-navy-900/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-saffron-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-saffron-500 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-saffron-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy-900 mb-2">{item.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
