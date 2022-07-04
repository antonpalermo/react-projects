import React from 'react'
import logo from '../assets/airbnb-logo.png'

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <img src={logo} alt="airbnb logo" />
      </div>
    </nav>
  )
}
