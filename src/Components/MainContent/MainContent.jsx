import React from 'react'
import MainWelcome from './MainWelcome/MainWelcome'
import '../../scss/main/mainContent.scss'
import MainRooms from './MainRooms/MainRooms'
import MainSlice from './MainSlice/MainSlice'
import Window from '../chat/Window'
import Header from '../Header/Header'
import Chat from '../chat/Chat'

const MainContent = () => {
  return (
    <main className='main'>
      <MainWelcome />
      <MainRooms />
      <MainSlice />
      <Chat/>
    </main>
  )
}

export default MainContent
