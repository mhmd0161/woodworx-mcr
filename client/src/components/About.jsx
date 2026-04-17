import React from 'react'
import './About.css'

const stats = [
  { number: '100%', label: 'Bespoke builds' },
  { number: 'MCR', label: 'Based in Manchester' },
  { number: '5★', label: 'Customer rated' },
  { number: 'Free', label: 'Quotes & advice' },
]

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="fade-up">
            <div className="section-label">About Us</div>
            <h2 className="section-title">
              Manchester Craftsmanship, Modern Standards
            </h2>
            <p className="section-desc">
              Wood Worx MCR is a Manchester-based joinery company specialising in
              high-quality bespoke staircases and balustrades. We combine
              traditional woodworking skills with modern design to deliver results
              that stand the test of time.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual fade-up">
            <div className="about-block span-2">
              <div className="about-block-icon">◆</div>
              <div className="about-block-title">Quality First</div>
              <div className="about-block-text">
                Every joint, every finish, every detail — built to last and look
                exceptional.
              </div>
            </div>
            <div className="about-block">
              <div className="about-block-icon">◇</div>
              <div className="about-block-title">Made to Measure</div>
              <div className="about-block-text">
                Nothing off the shelf. Everything custom.
              </div>
            </div>
            <div className="about-block">
              <div className="about-block-icon">★</div>
              <div className="about-block-title">Trusted Locally</div>
              <div className="about-block-text">
                Serving homes across Greater Manchester.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
