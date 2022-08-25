import React from 'react'
import MainWelcome from './MainWelcome/MainWelcome'
import '../../scss/main/mainContent.scss'
import MainRooms from './MainRooms/MainRooms'
import MainSlice from './MainSlice/MainSlice'


const MainContent = () => {
  return (
    <main className='main'>
      <MainWelcome />
      <MainRooms />
      <MainSlice />
    </main>
  )
}

export default MainContent
