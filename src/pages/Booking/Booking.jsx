import React from 'react';
import styles from "../../scss/pages/Booking.module.scss";



const Booking = () => {
    return (
      <div className={styles.booking_bloc}>
        <div className={styles.header}>
          <span>ROOM TYPE</span>
          <span>PRICE</span>
        </div>
        <div className={styles.photo_bloc}>
          <div className={styles.photo}>
            <img
              src="http://www.elathemes.com/themes/colina/assets/images/room-4.jpg"
              alt=""
            />
          </div>
          <div className={styles.price}></div>
        </div>
        <div className={styles.service_bloc1}>
          <span>Discount 15%</span>
          <span>$ 159,00</span>
        </div>
        <div className={styles.service_bloc2}>
          <span>TAX</span>
          <span>$ 59,00</span>
        </div>
        <div className={styles.service_bloc3}>
          <span>Promo code included!</span>
          <span>$ 1259,00</span>
        </div>
        <div className={styles.service_bloc4}>
          <button className={styles.btn1}>BACK</button>
          <button className={styles.btn1}>CHECKOUT</button>
        </div>
        <div className={styles.auth_payment}>
          <div className={styles.auth}>
            <h1>Register now</h1>
            <form>
              <input type="text" />
              <input type="text" />
              <input className={styles.inp3} type="text" />
              <input className={styles.inp4} type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <div className={styles.bloc_inp1}>
                <input className={styles.inp9} type="radio" />
                <div className={styles.inputdescr}>
                  <p>
                    I have read and accepted the terms, as well as read and
                    understood our terms of business contidions
                  </p>
                </div>
              </div>
              <button className={styles.btn}>Забронировать</button>
            </form>
          </div>
          <div className={styles.payment}>
            <h1>Choose payment</h1>
            <div className={styles.bloc_inp1}>
              <input className={styles.inp9} type="radio" />
              <div className={styles.inputdescr}>
                <h3>Pay via credit cart</h3>
                <p>
                  (MasterCard, Maestro, Visa, Visa Electron, JCB and American
                  Express)
                </p>
              </div>
            </div>
            <div className={styles.bloc_inp1}>
              <input className={styles.inp9} type="radio" />
              <div className={styles.inputdescr}>
                <h3>PayPal</h3>
                <p>
                  Purchase with your fingertips. Look for us the next time
                  you're
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Booking;