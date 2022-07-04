import React from 'react'
import star from '../assets/star.png'

export default function Card(props) {
  let badgeContent
  const { title, coverImg, stats, location, price, openSpots } = props.content

  if (openSpots === 0) {
    badgeContent = 'SOLD OUT'
  } else if (location === 'Online') {
    badgeContent = 'ONLINE'
  }


  return (
    <div className="card">
      <div className="card__cover">
        <img className="cover" src={coverImg} alt="card cover" />
        {badgeContent && <span className="badge">{badgeContent}</span>}
      </div>
      <div className="card__status">
        <img className="star" src={star} alt="star icon" />
        <span>{stats.rating}</span>
        <span className="gray">({stats.reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p className="card__text">{title}</p>
      <p className="card__text">
        <strong>From ${price}</strong> / person
      </p>
    </div>
  )
}
