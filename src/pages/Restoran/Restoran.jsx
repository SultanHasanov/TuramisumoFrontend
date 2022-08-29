import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import styles from "../../scss/pages/Restoran.module.scss";

const Restoran = () => {
  const [table, setTable] = useState(false)
  const [room, setRoom] = useState(false)

  const handleTable = () => {
    setTable(true)
    setRoom(false)
  }

  const handleRoom = () => {
    setRoom(true)
    setTable(false)
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
          <button  onClick={handleTable} className={styles.button}>Забронировать столик</button>
        </div>
        <div className={styles.choose_room}>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/07/3c/9f/d3/caption.jpg"
            alt=""
            className={styles.image}
          />
          <button onClick={handleRoom} className={styles.button}>Заказать в номер</button>
        </div>
      </div>
      {table ? <div>lol</div> : null}
      {room ? <div>kek</div> : null}
    </div>
  );
};

export default Restoran;
