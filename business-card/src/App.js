import React from 'react'

import avatar from './assets/avatar.jpg'

export default function App() {
  return (
    <main>
      <div className="card">
        <div className='img-container'>
          <img className="cover" src={avatar} alt="my awesome avatar" />
          <div className='cover-overlay'/>
        </div>
      </div>
    </main>
  )
}
