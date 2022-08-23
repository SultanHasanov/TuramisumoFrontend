import React from 'react'
import styles from './MainContent.module.css'
import MainWelcome from './MainWelcome/MainWelcome'

const MainContent = () => {
  return (
      <main className={styles.main}>
          <MainWelcome />
      </main>
  )
}

export default MainContent