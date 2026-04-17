import React from 'react'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We visit your property, discuss your vision and take precise measurements. Free of charge, no obligation.',
  },
  {
    number: '02',
    title: 'Design & Quote',
    description:
      "You'll receive a detailed quote and design overview so you know exactly what you're getting before any work begins.",
  },
  {
    number: '03',
    title: 'Build & Install',
    description:
      'We handcraft your project in our workshop and install it to perfection — leaving your space clean and transformed.',
  },
]

const Process = () => {
  return (
    <section id="process">
      <div className="container">
        <div className="fade-up" style={{ textAlign: 'center' }}>
          <div className="section-label">Why Wood Worx</div>
          <h2 className="section-title">The Process</h2>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card fade-up" key={index}>
              <div className="process-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
