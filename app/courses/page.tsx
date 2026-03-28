import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Clock, Users, Award, BookOpen, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Courses | Ravindra IAS',
  description: 'Explore our comprehensive UPSC courses including Foundation, Prelims Test Series, Mains Answer Writing, and Interview Guidance. Expert faculty, proven results.',
}

const courseDetails = [
  {
    id: 'foundation',
    title: 'Foundation Course',
    tagline: 'Your Complete UPSC Preparation',
    duration: '12 Months',
    mode: 'Offline + Online',
    price: '₹1,25,000',
    popular: true,
    description: 'Our flagship program designed for serious aspirants who want comprehensive preparation for all three stages of UPSC CSE.',
    features: [
      'Complete coverage of Prelims & Mains syllabus',
      'Comprehensive study material (25+ books)',
      'Daily current affairs classes',
      'Weekly test series (Prelims + Mains)',
      'Personal mentorship program',
      'Optional subject coaching',
      'CSAT preparation included',
      'Answer writing practice (500+ answers)',
      'Interview preparation',
      'Revision sessions',
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
  },
  {
    id: 'prelims',
    title: 'Prelims Test Series',
    tagline: 'Master the First Hurdle',
    duration: '6 Months',
    mode: 'Online',
    price: '₹8,500',
    popular: false,
    description: 'Intensive test series designed to help you crack UPSC Prelims with confidence and precision.',
    features: [
      '50+ Full-length tests',
      'CSAT coverage included',
      'Detailed explanations',
      'Performance analytics',
      'All India ranking',
      'Discussion sessions',
      'PYQ analysis',
      'Current affairs integration',
      'Negative marking guidance',
      'Time management tips',
    ],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop',
  },
  {
    id: 'mains',
    title: 'Mains Answer Writing',
    tagline: 'Craft Winning Answers',
    duration: '4 Months',
    mode: 'Offline + Online',
    price: '₹15,000',
    popular: false,
    description: 'Intensive answer writing program with personalized feedback to help you excel in Mains examination.',
    features: [
      'Daily answer writing practice',
      'Individual evaluation',
      'Model answers provided',
      'Personalized feedback',
      'GS coverage (all 4 papers)',
      'Ethics & Integrity program',
      'Essay writing sessions',
      'Answer structuring techniques',
      'Current affairs integration',
      'Mock Mains tests',
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
  },
  {
    id: 'interview',
    title: 'Interview Guidance',
    tagline: 'Ace the Final Round',
    duration: '2 Months',
    mode: 'Offline',
    price: '₹12,000',
    popular: false,
    description: 'Complete interview preparation with mock interviews, DAF analysis, and personality development.',
    features: [
      'Mock interviews (5 rounds)',
      'DAF analysis & preparation',
      'Current issues briefing',
      'Personality development',
      'Communication skills',
      'Body language training',
      'Mock Q&A sessions',
      'Panel interaction',
      'Post-interview feedback',
      'Dress code guidance',
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
  },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    rank: 'AIR 12',
    quote: 'The Foundation Course at Ravindra IAS transformed my approach to preparation. The mentorship program was exceptional.',
  },
  {
    name: 'Rahul Verma',
    rank: 'AIR 45',
    quote: 'The Mains Answer Writing program helped me improve my scores by 40%. The personalized feedback was invaluable.',
  },
  {
    name: 'Ananya Patel',
    rank: 'AIR 89',
    quote: 'Cleared Prelims in my first attempt itself. The test series was exactly what I needed for practice.',
  },
]

const featuredCourses = [
  { name: 'GS Foundation Course', id: 'comprehensive' },
  { name: 'GS PCM 2 Year Fledgling', id: 'comprehensive' },
  { name: 'CSAT Course', id: 'prelims' },
  { name: 'Prelims Test Series', id: 'prelims' },
  { name: '59 Questions Reflections', id: 'prelims' },
  { name: 'Sure-Shot Mains Test Series', id: 'mains' },
  { name: 'Essay Writing Programme', id: 'mains' },
  { name: 'Ethics Paper (Paper-V)', id: 'mains' },
  { name: 'Optional Subject Coaching', id: 'optional' },
  { name: 'IFoS Programme', id: 'optional' },
  { name: 'Interview Guidance Programme', id: 'interview' },
  { name: 'SMART Current Affairs 2026', id: 'comprehensive' },
  { name: 'StepUp Mentorship 2027', id: 'comprehensive' },
  { name: 'Module Courses', id: 'comprehensive' },
  { name: 'Optional Crash Course', id: 'optional' },
]

export default function CoursesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="container-width relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-saffron-500/20 text-saffron-400 rounded-full text-sm font-medium mb-6">
              Our Programs
            </span>
            <h1 className="heading-xl text-white mb-6">
              Choose Your Path to <span className="text-gradient">Success</span>
            </h1>
            <p className="text-navy-200 text-xl leading-relaxed">
              Comprehensive courses designed by India's top educators to guide you through every stage of the UPSC journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses Grid */}
      <section className="py-8 bg-white border-b border-navy-100">
        <div className="container-width">
          <h2 className="text-lg font-bold text-navy-900 mb-5 text-center">Our Featured UPSC CSE Courses</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {featuredCourses.map((course, index) => (
              <Link
                key={index}
                href={`/courses#course-${course.id}`}
                className="group flex items-center justify-between gap-2 px-3 py-2.5 bg-navy-50 hover:bg-saffron-50 rounded-lg transition-colors"
              >
                <span className="text-xs font-medium text-navy-700 group-hover:text-saffron-700 transition-colors text-center">
                  {course.name}
                </span>
                <ArrowRight className="w-3 h-3 text-saffron-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="space-y-16">
            {courseDetails.map((course, index) => (
              <div
                key={course.id}
                id={`course-${course.id}`}
                className={`grid lg:grid-cols-5 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className="lg:col-span-2 relative">
                  <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                    <Image
                      src={course.image}
                      alt={`${course.title} - ${course.tagline}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    {course.popular && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-saffron-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        MOST POPULAR
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-saffron-100 text-saffron-700 rounded-full text-sm font-medium">
                      {course.duration}
                    </span>
                    <span className="px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">
                      {course.mode}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-3xl text-navy-900 mb-2">{course.title}</h2>
                  <p className="text-saffron-600 font-medium mb-4">{course.tagline}</p>
                  <p className="text-navy-600 mb-6">{course.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {course.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-navy-700">
                        <Check className="w-4 h-4 text-saffron-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-navy-50 rounded-xl">
                    <div>
                      <span className="text-3xl font-bold text-navy-900">{course.price}</span>
                      <span className="text-navy-500 text-sm block">Full Course Fee</span>
                    </div>
                    <Link
                      href="/contact"
                      className="btn-primary sm:ml-auto"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-navy-50">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-lg text-navy-900 mb-4">What Our Students Say</h2>
            <p className="text-navy-600 text-lg">
              Hear from students who achieved their dream of becoming civil servants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-navy-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-saffron-600">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">{testimonial.name}</h4>
                    <span className="text-saffron-600 text-sm font-bold">{testimonial.rank}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-saffron-600 to-saffron-500">
        <div className="container-width text-center">
          <h2 className="heading-lg text-white mb-4">Not Sure Which Course is Right?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our counselors will help you choose the best program based on your background and preparation level.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-saffron-600 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-colors"
          >
            Get Free Counseling
          </Link>
        </div>
      </section>
    </>
  )
}
