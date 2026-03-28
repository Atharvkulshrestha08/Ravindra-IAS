'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, X } from 'lucide-react'

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else {
      const phoneDigits = formState.phone.replace(/\D/g, '')
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitting(false)
      setSubmitted(true)
      setFormState({ name: '', email: '', phone: '', course: '', message: '' })
      setErrors({})
    } catch {
      setIsSubmitting(false)
      setSubmitError('Something went wrong. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
  }

  const dismissSuccess = () => setSubmitted(false)

  return (
    <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="container-width relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content - Contact Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-3 py-1.5 bg-saffron-100 text-saffron-700 rounded-full text-xs font-medium mb-4"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="heading-lg text-navy-900 mb-4"
            >
              Start Your Journey with{' '}
              <span className="text-gradient">Ravindra IAS</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-navy-600 text-sm lg:text-base mb-6"
            >
              Schedule a free counseling session with our experts.
            </motion.p>

            {/* Contact Info Cards */}
            <div className="space-y-3 mb-6">
              {[
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  content: '45, Old Rajinder Nagar, Near Karol Bagh Metro, New Delhi - 110060',
                },
                {
                  icon: Phone,
                  title: 'Call Us',
                  content: '+91 98765 43210',
                  link: 'tel:+919876543210',
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  content: 'info@ravindraias.com',
                  link: 'mailto:info@ravindraias.com',
                },
                {
                  icon: Clock,
                  title: 'Working Hours',
                  content: 'Mon - Sat: 8:00 AM - 8:00 PM',
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-navy-50 rounded-lg hover:bg-saffron-50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                      <Icon className="w-5 h-5 text-saffron-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 text-sm mb-0.5">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-navy-600 text-sm hover:text-saffron-600 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-navy-600 text-sm">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Map Embed Placeholder */}
            <motion.a
              href="https://maps.google.com/?q=Old+Rajinder+Nagar+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="block bg-navy-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden hover:opacity-90 transition-opacity cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-10 h-10 mx-auto mb-2 text-saffron-400 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-sm">Old Rajinder Nagar, New Delhi</p>
                  <p className="text-xs text-saffron-400 mt-1">Click to open in Google Maps →</p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-navy-900/5 border border-navy-100"
          >
            <h3 className="font-display font-bold text-xl lg:text-2xl text-navy-900 mb-1">Free Counseling</h3>
            <p className="text-navy-600 text-sm mb-5">Fill the form below and we'll get back to you within 24 hours.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 relative"
              >
                <button
                  onClick={dismissSuccess}
                  className="absolute top-0 right-0 p-2 text-navy-400 hover:text-navy-600 transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="w-14 h-14 bg-saffron-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-7 h-7 text-saffron-600" />
                </div>
                <h4 className="font-semibold text-lg text-navy-900 mb-1">Thank You!</h4>
                <p className="text-navy-600 text-sm">We'll contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-navy-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      className={`w-full px-3 py-2.5 text-sm bg-navy-50 border rounded-lg text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 transition-all ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-navy-200 focus:border-saffron-500'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-navy-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      className={`w-full px-3 py-2.5 text-sm bg-navy-50 border rounded-lg text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 transition-all ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-navy-200 focus:border-saffron-500'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-navy-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      aria-invalid={!!errors.phone}
                      className={`w-full px-3 py-2.5 text-sm bg-navy-50 border rounded-lg text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 transition-all ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-navy-200 focus:border-saffron-500'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-xs font-medium text-navy-700 mb-1.5">
                      Interested Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formState.course}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 text-sm bg-navy-50 border border-navy-200 rounded-lg text-navy-900 focus:outline-none focus:border-saffron-500 focus:ring-2 focus:ring-saffron-500/20 transition-all"
                    >
                      <option value="">Select</option>
                      <option value="foundation">Foundation</option>
                      <option value="prelims">Prelims</option>
                      <option value="mains">Mains</option>
                      <option value="interview">Interview</option>
                      <option value="optional">Optional</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-navy-700 mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2.5 text-sm bg-navy-50 border border-navy-200 rounded-lg text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-saffron-500 focus:ring-2 focus:ring-saffron-500/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {submitError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs" role="alert">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Request Free Counseling
                    </span>
                  )}
                </button>

                <p className="text-center text-xs text-navy-500">
                  By submitting, you agree to our{' '}
                  <Link href="/privacy" className="text-saffron-600 hover:underline">Privacy Policy</Link>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
