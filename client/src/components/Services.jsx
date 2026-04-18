import React from 'react'
import { Layers, Grid3X3, Columns3 } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: <Layers size={24} />,
    title: 'Bespoke Staircases',
    description:
      'Custom-designed staircases that become the centrepiece of your home. From modern floating staircase designs to classic timber builds — installed anywhere in the UK.',
  },
  {
    icon: <Grid3X3 size={24} />,
    title: 'Glass Balustrades',
    description:
      'Sleek, frameless glass balustrades that let light flow through your space while keeping everything safe and stylish. Professional glass balustrade installation nationwide.',
  },
  {
    icon: <Columns3 size={24} />,
    title: 'Metal Spindle Balustrades',
    description:
      'Contemporary metal spindle systems that add character and a modern industrial edge to any staircase or landing. Precision-crafted and fitted to perfection.',
  },
]

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services-header fade-up">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">
            Built to Your<br />Exact Spec
          </h2>
          <p className="section-desc">
            Every staircase and balustrade is designed and crafted to fit your
            space perfectly. No off-the-shelf solutions — just quality
            craftsmanship delivered across the UK.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card fade-up" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
