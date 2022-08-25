import React from 'react'
import styles from "../../scss/footer/footer.module.scss"
import { Link } from 'react-router-dom';
import sun from './sun.png'

const Footer = () => {
  return (
    <footer>
        <div className={styles.footer_nav}>
            <ul className={styles.nav_ul}>
                <li>
                    <Link to="#">About us</Link>
                </li>
                |
                <li>
                    <Link to="#">Contact</Link>
                </li>
                |
                <li>
                    <Link to="#">Protfolio</Link>
                </li>
            </ul>

            <ul className={styles.nav_ul}>
                <li>
                    <Link to="#">Hostel</Link>
                </li>
                |
                <li>
                    <Link to="#">Orders</Link>
                </li>
                |
                <li>
                    <Link to="#">Sea</Link>
                </li>
            </ul>
        </div>
        <div className={styles.logo}>
            <img src={sun} alt="" />
        </div>
        <div className={styles.title}>
            <span>Copyright © 2022</span>
            |
            <span>Buy Colina Template</span>
        </div>
    </footer>
  )
}

export default Footer
