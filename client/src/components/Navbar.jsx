import React, { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo">
        WOOD<span>WORX</span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#process" onClick={closeMenu}>Process</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <a href="tel:07936543448" className="nav-cta desktop">
        <Phone size={16} />
        Call Now
      </a>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  )
}

export default Navbar
