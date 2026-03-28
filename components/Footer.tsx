'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import { navigation, socialLinks } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError('')
    
    if (!email.trim()) {
      setEmailError('Email is required')
      return
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }
    
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="section-padding bg-navy-900">
        <div className="container-width">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-saffron-500 rounded-xl flex items-center justify-center font-display font-bold text-2xl">
                  R
                </div>
                <div>
                  <span className="font-display font-bold text-xl block">Ravindra IAS</span>
                  <span className="text-saffron-400 text-xs font-medium tracking-wider">EXCELLENCE IN CIVIL SERVICES</span>
                </div>
              </Link>
              <p className="text-navy-300 mb-6 leading-relaxed">
                Empowering aspiring civil servants with knowledge, strategy, and guidance to achieve their dream of serving the nation.
              </p>
              <div className="flex gap-3">
                {socialLinks.slice(0, 4).map((social) => {
                  const Icon = iconMap[social.icon]
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 bg-navy-800 hover:bg-saffron-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4 text-saffron-400">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-navy-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-saffron-500 transition-all duration-200" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4 text-saffron-400">Our Programs</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/courses#course-foundation" className="text-navy-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-saffron-500 transition-all duration-200" />
                    Foundation Course
                  </Link>
                </li>
                <li>
                  <Link href="/courses#course-prelims" className="text-navy-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-saffron-500 transition-all duration-200" />
                    Prelims Test Series
                  </Link>
                </li>
                <li>
                  <Link href="/courses#course-mains" className="text-navy-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-saffron-500 transition-all duration-200" />
                    Mains Answer Writing
                  </Link>
                </li>
                <li>
                  <Link href="/courses#course-interview" className="text-navy-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-saffron-500 transition-all duration-200" />
                    Interview Guidance
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-navy-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-saffron-500 transition-all duration-200" />
                    Optional Subjects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4 text-saffron-400">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-saffron-500 mt-0.5 flex-shrink-0" />
                  <span className="text-navy-300">
                    45, Old Rajinder Nagar Market,<br />
                    Near Karol Bagh Metro Station,<br />
                    New Delhi - 110060
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-saffron-500 flex-shrink-0" />
                  <Link href="tel:+919876543210" className="text-navy-300 hover:text-white transition-colors">
                    +91 98765 43210
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-saffron-500 flex-shrink-0" />
                  <Link href="mailto:info@ravindraias.com" className="text-navy-300 hover:text-white transition-colors">
                    info@ravindraias.com
                  </Link>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="mt-6">
                <p className="text-sm text-navy-400 mb-3">Subscribe to our newsletter</p>
                {subscribed ? (
                  <div className="flex items-center gap-2 text-saffron-400 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Thanks for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setEmailError('')
                        }}
                        placeholder="Enter your email for updates"
                        className={`flex-1 min-w-0 px-4 py-2.5 bg-navy-800 border rounded-lg text-white placeholder:text-navy-500 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 transition-colors ${
                          emailError ? 'border-red-500' : 'border-navy-700 focus:border-saffron-500'
                        }`}
                        aria-label="Email for newsletter"
                        aria-invalid={!!emailError}
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 bg-saffron-500 hover:bg-saffron-600 rounded-lg transition-colors flex-shrink-0"
                        aria-label="Subscribe to newsletter"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                    {emailError && (
                      <p className="text-red-400 text-xs">{emailError}</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800 py-6">
        <div className="container-width">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-navy-400 text-sm">
              &copy; {new Date().getFullYear()} Ravindra IAS. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-navy-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="h-1 bg-gradient-to-r from-saffron-600 via-saffron-500 to-gold-500" />
    </footer>
  )
}
