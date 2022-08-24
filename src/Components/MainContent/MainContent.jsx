import React from 'react'
import MainWelcome from './MainWelcome/MainWelcome'
import '../../scss/main/mainContent.scss'
import Footer from '../Footer/Footer'
const MainContent = () => {
  return (
    <main className='main'>
      <MainWelcome />
      <Footer />
    </main>
  )
}

export default MainContent
