import React from "react";
import Header from "../../Components/Header/Header";
import styles from "../../scss/pages/Territory.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import location from './location.png'
import beach from './beach-chair.png'
import eyes from './ophtalmology.png'


const Territory = () => {
  return (
    <div className={styles.main}>
      <div className={styles.carta}>
        <div className={styles.btn}>
          <Link to="/">
            <button>
              <BsArrowLeft style={{ marginRight: "1rem" }} /> Вернуться назад
            </button>
          </Link>
        </div>
        <div className={styles.carta_image}>
            <div className={styles.marker_1}>
                <img src={location} alt="" />
            </div>
            <div className={styles.icon_beach}>
                <img src={beach} alt="" />
            </div>
            <div className={styles.marker_2}>
                <img src={location} alt="" />
            </div>
            <div className={styles.marker_3}>
                <img src={location} alt="" />
            </div>
            <div className={styles.icon_eyes}>
                <img src={eyes} alt="" />
            </div>
          <img
            src="https://www.s-caspiy.ru/progulka_files/contact.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Territory;
