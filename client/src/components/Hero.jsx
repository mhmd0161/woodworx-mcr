import React from 'react'
import { Phone, ChevronDown } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content fade-up">
        <div className="hero-badge">Bespoke Staircase Specialists</div>
        <h1>
          Crafting <span className="accent">Bespoke</span> Staircases &amp; Balustrades Across the UK
        </h1>
        <p>
          Custom staircases, glass balustrades and metal spindle balustrades —
          designed, built and installed to the highest standard nationwide.
        </p>
        <div className="hero-buttons">
          <a href="tel:07936543448" className="btn-primary">
            <Phone size={18} />
            Get a Free Quote
          </a>
          <a href="#services" className="btn-secondary">
            Our Services
            <ChevronDown size={16} />
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  )
}

export default Hero
