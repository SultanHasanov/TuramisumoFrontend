import React from 'react'
import MainWelcome from './MainWelcome/MainWelcome'
import '../../scss/main/mainContent.scss'
import MainRooms from './MainRooms/MainRooms'
import Footer from '../Footer/Footer'
const MainContent = () => {
  return (
    <main className='main'>
      <MainWelcome />
    </main>
  )
}

export default MainContent
