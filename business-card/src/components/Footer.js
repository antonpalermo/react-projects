import React from 'react'

import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import github from '../assets/github.svg'

export default function Footer() {
  return (
    <div className='card-footer'>
      <a href="/" className="btn-icon">
        <img src={twitter} alt="twitter icon" />
      </a>
      <a href="/" className="btn-icon">
        <img src={facebook} alt="facebook icon" />
      </a>
      <a href="/" className="btn-icon">
        <img src={instagram} alt="instagram icon" />
      </a>
      <a href="/" className="btn-icon">
        <img src={github} alt="github icon" />
      </a>
    </div>
  )
}
