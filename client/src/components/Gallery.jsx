import React, { useState, useEffect, useCallback } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const images = [
    { src: '/gallery/image1.jpeg', alt: 'Project photo' },
    { src: '/gallery/image3.jpeg', alt: 'Project photo' },
    { src: '/gallery/image5.jpeg', alt: 'Project photo' },
    { src: '/gallery/image11.jpeg', alt: 'Project photo' },
    { src: '/gallery/image15.jpeg', alt: 'Project photo' },
    { src: '/gallery/image17.jpeg', alt: 'Project photo' },
    { src: '/gallery/image20.jpeg', alt: 'Project photo' },
    { src: '/gallery/image26.jpeg', alt: 'Project photo' },
    { src: '/gallery/image29.jpeg', alt: 'Project photo' },
    { src: '/gallery/image30.jpeg', alt: 'Project photo' },
    { src: '/gallery/image32.jpeg', alt: 'Project photo' },
    { src: '/gallery/image33.jpeg', alt: 'Project photo' },
    { src: '/gallery/image35.jpeg', alt: 'Project photo' },
    { src: '/gallery/image36.jpeg', alt: 'Project photo' },
    { src: '/gallery/image37.jpeg', alt: 'Project photo' },
    { src: '/gallery/image40.jpeg', alt: 'Project photo' },
    { src: '/gallery/image42.jpeg', alt: 'Project photo' },
  ]

  const goTo = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % images.length)
  }, [current, images.length, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length)
  }, [current, images.length, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="gallery">
      <div className="container">
        <div className="fade-up">
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-desc">
            Take a look at some of our recently completed projects across Manchester.
          </p>
        </div>

        <div className="gallery-carousel fade-up">
          <div className="carousel-viewport">
            {images.map((img, i) => (
              <div
                key={i}
                className={`carousel-slide ${i === current ? 'active' : ''}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>

          <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
