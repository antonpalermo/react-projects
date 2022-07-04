import React from 'react'

import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Card from './components/Card'

import { data } from './data'

export default function App() {
  const offers = data.map(detail => (
    <Card
      key={detail.id}
      title={detail.title}
      img={detail.coverImg}
      rating={detail.stats.rating}
      reviewCount={detail.stats.reviewCount}
      price={detail.price}
      location={detail.location}
      openSpots={detail.openSpots}
    />
  ))

  return (
    <div>
      <Navbar />
      <section className="offers">{offers}</section>
    </div>
  )
}
