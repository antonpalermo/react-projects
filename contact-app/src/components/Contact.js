import React from 'react'

import Fluffykins from '../assets/fluffykins.png'

import Phone from '../assets/phone-icon.png'
import Mail from '../assets/mail-icon.png'

export default function Contact() {
  return (
    <div className="contact-card">
      <img src={Fluffykins} alt="Fluffykins" />
      <h3>Fluffykins</h3>
      <div className="info-group">
        <img src={Phone} alt="phone icon" />
        <p>(212) 555-2345</p>
      </div>
      <div className="info-group">
        <img src={Mail} alt="mail icon" />
        <p>fluff@me.com</p>
      </div>
    </div>
  )
}

// <div className="contact-card">
//   <img src={props.img} alt="contact avatar" />
//   <h3>{props.name}</h3>
//   <div className="info-group">
//     <img src={Phone} alt="phone icon" />
//     <p>{props.contact}</p>
//   </div>
//   <div className="info-group">
//     <img src={Mail} alt="mail icon" />
//     <p>{props.email}</p>
//   </div>
// </div>
