import Navbar from '@/components/website/Navbar'
import Hero from '@/components/website/Hero'
import Services from '@/components/website/Services'
import Stats from '@/components/website/Stats'
import Technologies from '@/components/website/Technologies'
import Process from '@/components/website/Process'
import Portfolio from '@/components/website/Portfolio'
import CaseStudies from '@/components/website/CaseStudies'
import Testimonials from '@/components/website/Testimonials'
import Pricing from '@/components/website/Pricing'
import Awards from '@/components/website/Awards'
import Footer from '@/components/website/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Technologies />
      <Process />
      <Portfolio />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <Awards />
      <Footer />
    </main>
  )
}