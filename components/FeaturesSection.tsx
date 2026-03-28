'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, BookOpen, TrendingUp, Target, Laptop, MessageCircle, Zap, Shield, Heart } from 'lucide-react'
import { features } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  BookOpen,
  TrendingUp,
  Target,
  Laptop,
  MessageCircle,
}

const additionalFeatures = [
  {
    icon: Zap,
    title: 'Fast-Track Program',
    description: 'Intensive 6-month program for working professionals with focused preparation strategy.',
  },
  {
    icon: Shield,
    title: 'Result Guarantee',
    description: 'Our unique result-oriented approach ensures you stay on track throughout your preparation.',
  },
  {
    icon: Heart,
    title: 'Student Welfare',
    description: 'Health & wellness support, stress management workshops, and personal counseling services.',
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="section-padding bg-navy-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #0a1929 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container-width relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium mb-4"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="heading-lg text-navy-900 mb-4"
          >
            What Makes <span className="text-gradient">Ravindra IAS</span>{' '}
            Different
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-navy-600 text-lg"
          >
            We don't just teach; we mentor, guide, and inspire. Our holistic approach ensures comprehensive preparation.
          </motion.p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg shadow-navy-900/5 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-saffron-500/5 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="relative font-display font-bold text-xl text-navy-900 mb-3">
                  {feature.title}
                </h3>
                <p className="relative text-navy-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-t from-saffron-500/5 to-transparent rounded-tl-full" />
              </motion.div>
            )
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-navy-100 hover:border-saffron-200 transition-colors"
              >
                <div className="w-12 h-12 bg-saffron-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-saffron-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-navy-600">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-16 bg-navy-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }} />

          <div className="relative">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-navy-300 mb-8 max-w-xl mx-auto">
              Join thousands of successful candidates who trusted Ravindra IAS for their UPSC preparation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="btn-primary"
              >
                Get Free Counseling
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-white hover:text-saffron-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 98765 43210
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
