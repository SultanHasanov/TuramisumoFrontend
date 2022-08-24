import React from 'react'
import Header from '../../Header/Header'
import '../../../scss/main/main.scss'

const MainWelcome = () => {
  return (
    <div className='main'>
      <Header />
      <div className='title'>
        <h1>YOUR WELCOME</h1>
        <h1 style={{ color: '#ceb071' }}>Turamisumo</h1>
        <span>
          Проведи свои каникулы вместе со своей семьей в нашем Отеле Turamisumo
        </span>
      </div>
    </div>
  )
}

export default MainWelcome
