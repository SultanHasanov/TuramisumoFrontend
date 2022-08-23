import React from 'react'
import styles from './MainWelcome.module.css'

const MainWelcome = () => {
  return (
    <main className={styles.main}>
        <div className={styles.title}>
            <h1>YOUR WELCOME</h1>
            <h1 style={{color: "#ceb071"}}>Turamisumo</h1>
            <span>Проведи свои каникулы вместе со своей семьей в нашем Отеле Turamisumo</span>
        </div>
    </main>
  )
}

export default MainWelcome