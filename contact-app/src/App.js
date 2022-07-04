import React from 'react'

import MrWhiskerson from './assets/mr-whiskerson.png'
import Fluffykins from './assets/fluffykins.png'
import Felix from './assets/felix.png'
import Pumpkin from './assets/pumpkin.png'

import Phone from './assets/phone-icon.png'
import Mail from './assets/mail-icon.png'

export default function App() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={MrWhiskerson} alt="Mr. Whiskerson" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={Phone} alt="phone icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={Mail} alt="mail icon" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

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

      <div className="contact-card">
        <img src={Felix} alt="Felix" />
        <h3>Felix</h3>
        <div className="info-group">
          <img src={Phone} alt="phone icon" />
          <p>(212) 555-4567</p>
        </div>
        <div className="info-group">
          <img src={Mail} alt="mail icon" />
          <p>thecat@hotmail.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={Pumpkin} alt="Pumpkin" />
        <h3>Pumpkin</h3>
        <div className="info-group">
          <img src={Phone} alt="phone icon" />
          <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img src={Mail} alt="mail icon" />
          <p>pumpkin@scrimba.com</p>
        </div>
      </div>
    </div>
  )
}
