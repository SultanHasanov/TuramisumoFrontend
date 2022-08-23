import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import sun from './sun.png'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.nav_block}>
          <li>
            <Link to="#">HOME</Link>
          </li>
          <li>
            <Link to="#">PAGES</Link>
          </li>
          <li>
            <Link to="#">BOOKING</Link>
          </li>
        </ul>

        <div className={styles.img}>
            <img src={sun} alt="" />
        </div>

        <ul className={styles.nav_block}>
          <li>
            <Link to="#">FACILITIES</Link>
          </li>
          <li>
            <Link to="#">BLOG</Link>
          </li>
          <li>
            <Link to="#">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
