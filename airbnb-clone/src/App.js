import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import { data } from './data'

export default function App() {
  const offers = data.map(detail => (
    <Card
      key={detail.id}
      content={detail}
    />
  ))

  return (
    <div>
      <Navbar />
      <Hero/>
      <section className="offers">{offers}</section>
    </div>
  )
}
