import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ravindra IAS',
  description: 'Privacy policy for Ravindra IAS - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
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
          <h1 className="heading-xl text-white">Privacy Policy</h1>
          <p className="text-navy-300 mt-4">Last updated: March 2025</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Introduction</h2>
            <p>
              At Ravindra IAS, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name and contact details (email address, phone number)</li>
              <li>Educational background and qualification information</li>
              <li>Payment information when enrolling in courses</li>
              <li>Communication preferences</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process course enrollments and manage your account</li>
              <li>Communicate with you about our programs and services</li>
              <li>Send important updates and announcements</li>
              <li>Improve our website and services</li>
              <li>Respond to your inquiries and support requests</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can control cookie settings through your 
              browser preferences.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <ul>
              <li>Email: info@ravindraias.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 45, Old Rajinder Nagar, New Delhi - 110060</li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
