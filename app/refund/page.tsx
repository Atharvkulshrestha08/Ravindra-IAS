import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy | Ravindra IAS',
  description: 'Refund and cancellation policy for Ravindra IAS courses and programs.',
}

export default function RefundPage() {
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
          <h1 className="heading-xl text-white">Refund Policy</h1>
          <p className="text-navy-300 mt-4">Last updated: March 2025</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-lg text-navy-600 bg-navy-50 p-6 rounded-xl border-l-4 border-saffron-500">
              At Ravindra IAS, we want you to be completely satisfied with your educational investment. 
              Please read our refund policy carefully before enrolling.
            </p>

            <h2>Refund Eligibility</h2>
            <p>Refunds are available under the following circumstances:</p>
            
            <h3>Cancellation Before Course Start</h3>
            <ul>
              <li><strong>100% Refund:</strong> If you cancel within 7 days of enrollment, before the course commences</li>
              <li><strong>50% Refund:</strong> If you cancel within 14 days of enrollment</li>
              <li><strong>No Refund:</strong> After 14 days from enrollment</li>
            </ul>

            <h3>Course Cancellation by Institute</h3>
            <p>
              In the rare event that Ravindra IAS cancels a course, you will receive a full refund within 7 working days.
            </p>

            <h2>Refund Process</h2>
            <ol>
              <li>Submit a refund request via email to info@ravindraias.com</li>
              <li>Include your enrollment details and reason for refund</li>
              <li>Refund requests are processed within 7-10 working days</li>
              <li>Refunds are credited to the original payment method</li>
            </ol>

            <h2>Non-Refundable Items</h2>
            <ul>
              <li>Registration and processing fees</li>
              <li>Study materials (if already provided)</li>
              <li>Goods or products purchased separately</li>
              <li>Services already rendered</li>
            </ul>

            <h2>Partial Refunds</h2>
            <p>
              For courses already in progress, refunds are calculated based on:
            </p>
            <ul>
              <li>Number of classes attended</li>
              <li>Study materials provided</li>
              <li>Services utilized</li>
            </ul>

            <h2>Transfer Policy</h2>
            <p>
              Instead of a refund, you may request to transfer your enrollment to:
            </p>
            <ul>
              <li>Another course of equal or higher value (paying the difference)</li>
              <li>Next batch of the same course (subject to availability)</li>
              <li>Another student (with approval and transfer fee)</li>
            </ul>

            <h2>Special Circumstances</h2>
            <p>
              In cases of medical emergency or unforeseen circumstances, please contact us directly. 
              We review such requests on a case-by-case basis and may offer:
            </p>
            <ul>
              <li>Extended payment plans</li>
              <li>Course pause or deferment</li>
              <li>Special consideration for refunds</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For questions about our refund policy or to initiate a refund request:
            </p>
            <ul>
              <li>Email: info@ravindraias.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 45, Old Rajinder Nagar, New Delhi - 110060</li>
              <li>Hours: Monday - Saturday, 8:00 AM - 8:00 PM</li>
            </ul>

            <h2>Policy Updates</h2>
            <p>
              This refund policy is subject to change. The policy in effect at the time of your enrollment will govern your 
              eligibility for refunds.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
