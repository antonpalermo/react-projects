import React from 'react'

import email from '../assets/email.svg'
import linkedIn from '../assets/linkedin.svg'

export default function Info() {
  return (
    <div className='info'>
      <div className="info-container">
        <h1 className="heading">Anton Palermo</h1>
        <p>IT Specialist</p>
        <a href="/">hello.antonpalermo@gmail.com</a>
      </div>
      <div className="btn-container">
        <button className="btn">
          <img src={email} alt="Email icon" /> Email
        </button>
        <button className="btn btn-primary">
          <img src={linkedIn} alt="LinkedIn icon" /> LinkedIn
        </button>
      </div>
    </div>
  )
}
