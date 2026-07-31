import { Navbar } from './components/Navbar'
import { Hero } from './components/sections/Hero'
import { Highlights } from './components/sections/Highlights'
import { Services } from './components/sections/Services'
import { Bento } from './components/sections/Bento'
import { Benefits } from './components/sections/Benefits'
import { Work } from './components/sections/Work'
import { Process } from './components/sections/Process'
import { Testimonials } from './components/sections/Testimonials'
import { CtaBand } from './components/sections/CtaBand'
import { FAQ } from './components/sections/FAQ'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Bento />
        <Benefits />
        <Work />
        <Process />
        <Testimonials />
        <CtaBand />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
