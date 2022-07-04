import React from 'react'

import Phone from '../assets/phone-icon.png'
import Mail from '../assets/mail-icon.png'

export default function Contact({ img, name, contact, email }) {
  return (
    <div className="contact-card">
      <img src={img} alt="contact avatar" />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={Phone} alt="phone icon" />
        <p>{contact}</p>
      </div>
      <div className="info-group">
        <img src={Mail} alt="mail icon" />
        <p>{email}</p>
      </div>
    </div>
  )
}
