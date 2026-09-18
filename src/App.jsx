import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Workflow from './components/Workflow.jsx'
import Trust from './components/Trust.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 600, 
      easing: 'ease-out',
      once: true, 
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Trust />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
