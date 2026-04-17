import React, { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Analytics />
    </>
  )
}

export default App
