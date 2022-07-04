import React from 'react'
import photo__grid from '../assets/photo-grid.png'

export default function Hero() {
  return (
    <div className="hero-section">
      <img className="photo__grid" src={photo__grid} alt="cover grid" />
      <div className="hero__tagline__container">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  )
}
