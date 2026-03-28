import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import CoursesSection from '@/components/CoursesSection'
import ToppersSection from '@/components/ToppersSection'
import FeaturesSection from '@/components/FeaturesSection'
import ResourcesSection from '@/components/ResourcesSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CoursesSection />
      <ToppersSection />
      <FeaturesSection />
      <ResourcesSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
