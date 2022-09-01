import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../Components/Header/Header'
import { getUser } from '../../features/userSlice'
import styles from '../../scss/pages/Welcome.module.scss'

const WelcomeCard = () => {
    const userInfo = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

console.log(userInfo)
    useEffect(() => {
        dispatch(getUser())
    },[dispatch])


  return (
    <div className={styles.main}>
        <Header />
        <div className={styles.header_title}>
            <h1>ВЫДАЧА ВАШЕЙ КАМПУСНОЙ КАРТЫ</h1>
        </div>
        <div className={styles.main_card}>
            <div className={styles.user_info}>
                <div className={styles.title_card}>
                    <h1>ВАША УНИКАЛЬНАЯ КАРТА</h1>
                </div>
                <div className={styles.info_block}>
                    <div className={styles.name_block}>
                        <h3>Name</h3>
                        <span>{userInfo.name}</span>
                    </div>
                    <div className={styles.name_block}>
                        <h3>Surname</h3>
                        <span>{userInfo.surname}</span>
                    </div>
                    <div className={styles.name_block}>
                        <h3>Login</h3>
                        <span>{userInfo.login}</span>
                    </div>
                    <div className={styles.name_block}>
                        <h3>Age</h3>
                        <span>{userInfo.age}</span>
                    </div>
                    <div className={styles.name_block}>
                        <h3>Phone</h3>
                        <span>{userInfo.phone}</span>
                    </div>
                    <div className={styles.name_block}>
                        <h3>Card info</h3>
                        <span>{userInfo.card}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomeCard