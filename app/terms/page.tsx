import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Ravindra IAS',
  description: 'Terms and conditions for using Ravindra IAS services and website.',
}

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="container-width relative">
          <Link href="/" className="inline-flex items-center gap-2 text-saffron-400 hover:text-saffron-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="heading-xl text-white">Terms of Service</h1>
          <p className="text-navy-300 mt-4">Last updated: March 2025</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Ravindra IAS website and services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>

            <h2>Services Offered</h2>
            <p>
              Ravindra IAS provides coaching and preparation services for the Union Public Service Commission (UPSC) Civil Services 
              Examination. Our services include:
            </p>
            <ul>
              <li>Foundation courses for comprehensive preparation</li>
              <li>Prelims test series</li>
              <li>Mains answer writing programs</li>
              <li>Interview guidance sessions</li>
              <li>Study materials and resources</li>
            </ul>

            <h2>Enrollment and Payment</h2>
            <h3>Enrollment</h3>
            <p>
              Enrollment in our programs is subject to availability and meeting any prerequisite requirements. You agree to 
              provide accurate and complete information during enrollment.
            </p>

            <h3>Payment Terms</h3>
            <ul>
              <li>Course fees must be paid in full before access is granted</li>
              <li>We accept payments via specified payment methods</li>
              <li>All prices are in Indian Rupees (INR)</li>
              <li>GST is applicable on all courses as per government regulations</li>
            </ul>

            <h2>Course Access and Usage</h2>
            <p>When enrolled in our programs, you agree to:</p>
            <ul>
              <li>Use course materials solely for personal educational purposes</li>
              <li>Not share, distribute, or reproduce course content without permission</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content, materials, and resources provided by Ravindra IAS are protected by copyright and other intellectual 
              property laws. You do not acquire any ownership rights by enrolling in our programs.
            </p>

            <h2>Code of Conduct</h2>
            <p>Students are expected to:</p>
            <ul>
              <li>Maintain discipline and respect in all interactions</li>
              <li>Attend scheduled classes and sessions regularly</li>
              <li>Submit assignments and tests on time</li>
              <li>Treat faculty and fellow students with respect</li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              While we strive to provide the best possible guidance and preparation, we do not guarantee selection in the UPSC 
              examination. Success depends on individual effort, dedication, and various external factors.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Ravindra IAS shall not be liable for any indirect, incidental, special, or consequential damages arising out of 
              or in connection with our services.
            </p>

            <h2>Termination</h2>
            <p>
              We reserve the right to terminate access to our services if you violate these terms or engage in behavior that 
              is disruptive or harmful to others.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes shall be 
              subject to the exclusive jurisdiction of courts in New Delhi.
            </p>

            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <ul>
              <li>Email: info@ravindraias.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 45, Old Rajinder Nagar, New Delhi - 110060</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
