import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import styles from "../../scss/pages/Restoran.module.scss";
import { useDispatch } from "react-redux";
import { restRoom, restTable } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import { GiRiceCooker } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";


const Restoran = () => {
  const [restoran, setRestoran] = useState(true);
  const [shefs, setShefs] = useState(false);

  const dispatch = useDispatch();

  const handleClickShefs = () => {
    setShefs(true);
    setRestoran(false);
  };

  const handleClickRestoran = () => {
    setShefs(false);
    setRestoran(true);
  };

  const handleTable = () => {
    dispatch(restTable());
  };

  const handleRoom = () => {
    dispatch(restRoom());
  };

  return (
    <div className={styles.main_res}>
      <Header />
      <div className={styles.title}>
        <h1>Ресторан Teramisumo</h1>
      </div>
      <div className={styles.restoran_info}>
        <div className={styles.categor_restoran}>
          <div className={styles.icon} onClick={handleClickRestoran}>
            <MdFoodBank />
          </div>
          <div className={styles.icon} onClick={handleClickShefs}>
            <GiRiceCooker />
          </div>
          <div className={styles.icon}>
            <MdFoodBank />
          </div>
          <div className={styles.icon}>
            <MdFoodBank />
          </div>
        </div>

        <div className={styles.restoran_blog}>
          {restoran && (
            <div className={styles.res_block}>
              <div className={styles.res_title}>
                <h1>Restaurants</h1>
                <span>
                  The Resturant is the Colina Resort's iconic dining venue,
                  serving breakfast, afternoon tea and an evening service
                  complimented by the recent addition of a bar and craft
                  cocktail program.
                </span>
              </div>
              <div className={styles.menu}>
                <div className={styles.card_rest}>
                  <button><Link to="/menu">Забронировать столик</Link></button>
                </div>

                <div className={styles.card_rest2}>
                  <button><Link to="/menu">Закать в номер</Link></button>
                </div>
              </div>
            </div>
          )}

          {shefs && (
            <div className={styles.res_block}>
              <div className={styles.res_title}>
                <h1>Restaurants</h1>
                <span>
                  The Resturant is the Colina Resort's iconic dining venue,
                  serving breakfast, afternoon tea and an evening service
                  complimented by the recent addition of a bar and craft
                  cocktail program.
                </span>
              </div>
              <div className={styles.shefs}>
                <div className={styles.povar}>
                  <div className={styles.photoshef}>
                    <img
                      src="https://bigpicture.ru/wp-content/uploads/2018/11/saltbae_salt1_index1a.jpg"
                      alt=""
                    />
                  </div>

                  <div className={styles.povar_info}>
                    <div className={styles.bio}>
                      <h1>Salt Bae</h1>
                      <span>
                        Нусрет Гёкче — турецкий мясник, шеф-повар и ресторатор,
                        которому принадлежит сеть стейк-хаусов Nusr-Et.
                      </span>
                    </div>
                    <div className={styles.bio_title}>
                      <span>
                        С января 2017 года Гёкче стал широко известен благодаря
                        серии вирусных интернет-видеороликов и мемов, в которых
                        показано, как он ловко режет мясо и посыпает солью.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restoran;
