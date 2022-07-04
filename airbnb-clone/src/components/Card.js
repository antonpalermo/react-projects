import React from 'react'
import star from '../assets/star.png'

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__cover">
        <img className="cover" src={props.img} alt="card cover" />
        <span className="badge">SOLD OUT</span>
      </div>
      <div className="card__status">
        <img className="star" src={star} alt="star icon" />
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) • </span>
        <span className='gray'>{props.country}</span>
      </div>
      <p className='card__text'>{props.title}</p>
      <p className='card__text'>
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  )
}
