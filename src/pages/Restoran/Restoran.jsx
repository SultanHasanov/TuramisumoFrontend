import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import styles from "../../scss/pages/Restoran.module.scss";
import { useDispatch } from 'react-redux';
import { restRoom, restTable } from "../../features/cartSlice";
import { Link } from "react-router-dom";

const Restoran = () => {

  const dispatch = useDispatch();

  const handleTable = () => {
    dispatch(restTable())
  }

  const handleRoom = () => {
    dispatch(restRoom())
  }


  return (
    <div className={styles.main_res}>
      <Header />
      <h1 className={styles.restoranTitle}>
        РЕСТОРАН
        <span style={{ color: "rgb(206, 176, 113)" }}> «TURAMISUMO»</span>
      </h1>
      <div className={styles.restoranTitle}>
        Ресторан «TURAMISUMO»: лучшее предложение по соотношению цена-качество.
        У нас вы можете насладиться как свежайшими морепродуктами, так и
        народными блюдами.
      </div>
      <div className={styles.choose}>
        <div className={styles.choose_table}>
          <img
            src="https://kartinkin.net/uploads/posts/2021-08/1630081232_10-kartinkin-com-p-stol-v-kafe-s-yedoi-yeda-krasivo-foto-12.jpg"
            alt=""
            className={styles.image}
          />
          <button  onClick={handleTable} className={styles.button}><Link to="/menu">Забронировать столик</Link></button>
        </div>
        <div className={styles.choose_room}>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/07/3c/9f/d3/caption.jpg"
            alt=""
            className={styles.image}
          />
          <button onClick={handleRoom} className={styles.button}><Link to="/menu">Заказать в номер</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Restoran;
