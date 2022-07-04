import React from 'react'

import Phone from '../assets/phone-icon.png'
import Mail from '../assets/mail-icon.png'

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} alt="contact avatar" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={Phone} alt="phone icon" />
        <p>{props.contact}</p>
      </div>
      <div className="info-group">
        <img src={Mail} alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </div>
  )
}
