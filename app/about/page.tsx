import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, Award, Users, TrendingUp } from 'lucide-react'
import Timeline from '@/components/Timeline'

export const metadata: Metadata = {
  title: 'About Us | Ravindra IAS',
  description: 'Learn about Ravindra IAS - India\'s leading UPSC coaching institute founded by former IAS officer Dr. Ravindra Kumar. 15+ years of excellence in civil services preparation.',
}

const team = [
  {
    name: 'Dr. Ravindra Kumar',
    role: 'Founder & Director',
    qualification: 'IAS (Retd.), IIT Delhi',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    description: 'Former Indian Administrative Service officer with 25 years of experience in governance and public administration.',
  },
  {
    name: 'Prof. Meera Singh',
    role: 'Academic Director',
    qualification: 'M.A. History, JNU',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    description: 'Expert in Ancient and Medieval History with 18 years of teaching experience in UPSC coaching.',
  },
  {
    name: 'Dr. Rajesh Verma',
    role: 'Chief Mentor',
    qualification: 'IPS (Retd.), LBSNAA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    description: 'Former IPS officer specializing in ethics, integrity, and personality development.',
  },
  {
    name: 'Prof. Anjali Sharma',
    role: 'Current Affairs Head',
    qualification: 'M.A. Political Science, DU',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    description: 'Renowned expert in Indian polity and current affairs with innovative teaching methodologies.',
  },
]

const values = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'We maintain the highest standards of teaching quality, ensuring every student receives world-class education.',
  },
  {
    icon: Users,
    title: 'Student First',
    description: 'Our approach is centered around each student\'s unique needs, strengths, and career goals.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We believe in transparent processes and honest guidance, with no false promises.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description: 'We constantly evolve our methodologies to keep pace with changing exam patterns.',
  },
]

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="heading-xl text-white mb-6">
              Our Story of <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-navy-200 text-xl leading-relaxed">
              Founded in 2009 by Dr. Ravindra Kumar, a former IAS officer with a vision to transform UPSC preparation, 
              Ravindra IAS has grown to become India's most trusted name in civil services coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-navy-900 mb-6">
                Empowering Future <span className="text-gradient">Civil Servants</span>
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-6">
                Our mission is simple: to provide comprehensive, ethical, and result-oriented coaching that transforms 
                aspiring civil servants into competent leaders who will shape India's future.
              </p>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                We don't just prepare students for an examination; we nurture them into well-rounded individuals 
                equipped with knowledge, ethics, and the spirit of public service.
              </p>
              <Link href="/contact" className="btn-primary">
                Schedule a Visit
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
                      alt="Classroom"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop"
                      alt="Study group"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop"
                      alt="Mentorship"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop"
                      alt="Success"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline />

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg text-navy-900 mb-4">Our Core Values</h2>
            <p className="text-navy-600 text-lg">
              These principles guide everything we do at Ravindra IAS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="text-center p-6 bg-navy-50 rounded-2xl">
                  <div className="w-14 h-14 bg-saffron-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-saffron-600" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-navy-900 mb-2">{value.title}</h3>
                  <p className="text-navy-600 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-saffron-500/20 text-saffron-400 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="heading-lg text-white mb-4">Meet Our Experts</h2>
            <p className="text-navy-300 text-lg">
              Learn from India's best educators and administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-navy-800 rounded-2xl overflow-hidden group">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Ravindra IAS`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-1">{member.name}</h3>
                  <p className="text-saffron-400 text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-navy-400 text-xs mb-3">{member.qualification}</p>
                  <p className="text-navy-300 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-saffron-500">
        <div className="container-width text-center">
          <h2 className="heading-lg text-white mb-4">Ready to Join Us?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards your dream of becoming a civil servant. Our experts are here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-saffron-600 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-colors"
            >
              Get Free Counseling
            </Link>
            <Link
              href="/courses"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-saffron-600 transition-colors"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
