import React from 'react'
import star from '../assets/star.png'

export default function Card(props) {
  let badgeContent

  if (props.openSpots === 0) {
    badgeContent = 'SOLD OUT'
  } else if (props.location === 'Online') {
    badgeContent = 'ONLINE'
  }

  return (
    <div className="card">
      <div className="card__cover">
        <img className="cover" src={props.img} alt="card cover" />
        {badgeContent && <span className="badge">{badgeContent}</span>}
      </div>
      <div className="card__status">
        <img className="star" src={star} alt="star icon" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card__text">{props.title}</p>
      <p className="card__text">
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  )
}
