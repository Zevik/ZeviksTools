import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Tools from '@/components/Tools'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Tools />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}
