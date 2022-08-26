import React from 'react'
import styles from '../../scss/pages/Contact.module.scss';
import Header from "../../Components/Header/Header";
import { BiMap } from "react-icons/bi";
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdTime } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'
import { YMaps, Map, Placemark } from "react-yandex-maps";


const Contact = () => {
  return (
    <div className={styles.contact_main}>
      <Header />
      <div className={styles.contactsTitle}>
        <h1>
          КОНТАКТЫ
          <span style={{ color: "rgb(206, 176, 113)" }}> «TURAMISUMO»</span>
        </h1>
      </div>
      <div className={styles.contactsTitle1}>
        <img src="https://www.s-caspiy.ru/img/separator.png" alt="" />
      </div>
      <div className={styles.content_main}>
        <div className={styles.address}>
          <div className={styles.icon_address}>
            <div>
              <BiMap className={styles.icon} />
            </div>
            <div className={styles.bloc_address}>
              <h1>АДРЕС:</h1>
              <p>
                Республика Дагестан, Карабудахкентский район, поселок Манас.
              </p>
            </div>
          </div>
          <div className={styles.icon_address}>
            <div>
              <BsFillTelephoneFill className={styles.icon} />
            </div>
            <div className={styles.bloc_address}>
              <h1>ТЕЛЕФОН:</h1>
              <p>8 (8722) 52-22-05</p>
            </div>
          </div>
          <div className={styles.icon_address}>
            <div>
              <IoMdTime className={styles.icon} />
            </div>
            <div className={styles.bloc_address}>
              <h1>ВРЕМЯ РАБОТЫ:</h1>
              <p>c 08:00 до 22:00</p>
              <p>без выходных</p>
            </div>
          </div>
          <div className={styles.icon_address}>
            <div>
              <MdAlternateEmail className={styles.icon} />
            </div>
            <div className={styles.bloc_address}>
              <h1>E-MAIL:</h1>
              <p>sul987@mail.ru</p>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <YMaps >
            <Map className={styles.map_cart} defaultState={{ center: [42.702153, 47.717082], zoom: 16 }} />
          </YMaps>
        </div>
      </div>
    </div>
  );
}

export default Contact