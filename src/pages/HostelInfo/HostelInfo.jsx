import React from 'react'
import Header from '../../Components/Header/Header'
import styles from '../../scss/pages/HostelInfo.module.scss'

const HostelInfo = () => {
  return (
    <div className={styles.hostel_main}>
        <Header />
        <div className={styles.title}>
          <h1>ВАЖНАЯ ИНФОРМАЦИЯ</h1>
        </div>
        <div className={styles.uslugs}>
          <span>Порядок предоставления услуг</span>
          <span>ПОРЯДОК</span>
          <span>ПРЕДОСТАВЛЕНИЯ САНАТОРНО-КУРОРТНЫХ</span>
          <span>ОЗДОРОВИТЕЛЬНЫХ УСЛУГ</span>
          <span>ОБЩЕСТВА С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ</span>
          <h2>КУРОРТ TURAMISUMO</h2>
        </div>
        <div className={styles.description}>
        </div>
    </div>
  )
}

export default HostelInfo