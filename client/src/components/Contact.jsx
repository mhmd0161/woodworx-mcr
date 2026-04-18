import React, { useState } from 'react'
import { Phone, MessageCircle, Send } from 'lucide-react'
import './Contact.css'

const WHATSAPP_NUMBER = '447936543448'
const PHONE_NUMBER = '07936543448'

const SERVICE_LABELS = {
  'staircases': 'Staircases',
  'glass-balustrades': 'Glass Balustrades',
  'metal-spindle': 'Metal Spindle Balustrades',
  'bespoke-joinery': 'Bespoke Joinery',
  'other': 'Other',
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, phone, service, message } = formData
    const serviceName = SERVICE_LABELS[service] || service
    const whatsappText = encodeURIComponent(
      `Hi Wood Worx MCR!\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Service:* ${serviceName}\n\n` +
      `*Message:*\n${message}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`, '_blank')
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Wood Worx MCR! I'm interested in your services. Can I get a quote?`
  )
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-info fade-up">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">
              Ready to Start<br />Your Project?
            </h2>
            <p className="section-desc">
              Give us a call, drop us a WhatsApp, or fill in the form and we'll
              get back to you.
            </p>

            <div className="contact-methods">
              <a href={`tel:${PHONE_NUMBER}`} className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Call Us</div>
                  <div className="contact-item-value">07936 543 448</div>
                </div>
              </a>

              
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item whatsapp"
              >
                <div className="contact-item-icon">
                  <MessageCircle size={22} />
                </div>
                <div className="contact-item-text">
                  <div className="contact-item-label">WhatsApp</div>
                  <div className="contact-item-value">Message Us</div>
                </div>
              </a>
            </div>

            <div className="socials">
              <a href="https://www.instagram.com/woodworx_mcr/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@woodworx_mcr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.4a6.37 6.37 0 00-.79-.05A6.26 6.26 0 003.23 15.2a6.26 6.26 0 006.26 6.26 6.26 6.26 0 006.26-6.26V9.26a8.28 8.28 0 004.84 1.55V7.36a4.85 4.85 0 01-1-.67z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper fade-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us an Enquiry</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="staircases">Staircases</option>
                  <option value="glass-balustrades">Glass Balustrades</option>
                  <option value="metal-spindle">Metal Spindle Balustrades</option>
                  <option value="bespoke-joinery">Bespoke Joinery</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={4} required />
              </div>

              <button type="submit" className="btn-whatsapp submit-btn">
                <Send size={16} />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
