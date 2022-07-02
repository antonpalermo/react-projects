import React from 'react'
import ReactLogo from '../small-icon.svg'

export default function Navbar() {
  return (
    <nav>
      <div className='container'>
        <div className="brand">
          <img className='logo' src={ReactLogo} alt="React JS official logo" />
          <h3>React Facts</h3>
        </div>
        <h4>React Course - Project 1</h4>
      </div>
    </nav>
  )
}
