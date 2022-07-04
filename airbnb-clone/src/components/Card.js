import React from 'react'
import card__cover from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

export default function Card() {
  return (
    <div className="card">
      <div className="card__cover">
        <img className="cover" src={card__cover} alt="card cover" />
        <span className="badge">SOLD OUT</span>
      </div>
      <div className="card__status">
        <img className="star" src={star} alt="star icon" />
        <span>5.0</span>
        <span className='gray'>(6) • </span>
        <span className='gray'>USA</span>
      </div>
      <p className='card__text'>Life lessons with Katie Zaferes</p>
      <p className='card__text'>
        <strong>From $136</strong> / person
      </p>
    </div>
  )
}
