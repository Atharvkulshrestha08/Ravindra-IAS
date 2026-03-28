import type { Metadata } from 'next'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us | Ravindra IAS',
  description: 'Get in touch with Ravindra IAS for free counseling. Visit our center in Old Rajinder Nagar, New Delhi or call us at +91 98765 43210.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="container-width relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-saffron-500/20 text-saffron-400 rounded-full text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="heading-xl text-white mb-6">
              Let's Start Your <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-navy-200 text-xl leading-relaxed">
              Schedule a free counseling session with our experts. We'll help you understand the exam pattern, 
              assess your preparation level, and recommend the best program for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Additional Info */}
      <section className="py-12 bg-navy-50">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-14 h-14 bg-saffron-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Response Time</h3>
              <p className="text-navy-600">We respond to all inquiries within 24 hours</p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-saffron-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">Expert Team</h3>
              <p className="text-navy-600">Our counselors are former civil servants</p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-saffron-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-saffron-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">No Obligation</h3>
              <p className="text-navy-600">Free counseling with no pressure to enroll</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
