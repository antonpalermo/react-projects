import React from 'react'
import Contact from './components/Contact'

import MrWhiskerson from './assets/mr-whiskerson.png'
import Fluffykins from './assets/fluffykins.png'
import Felix from './assets/felix.png'
import Pumpkin from './assets/pumpkin.png'

export default function App() {
  return (
    <div className="contacts">
      <Contact
        img={MrWhiskerson}
        name="Mr. Whiskerson"
        contact="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={Fluffykins}
        name="Fluffykins"
        contact="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={Felix}
        name="Felix"
        contact="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={Pumpkin}
        name="Pumpkin"
        contact="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  )
}
