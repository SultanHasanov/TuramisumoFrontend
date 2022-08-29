import React, { useState } from 'react';
import Header from "../../Components/Header/Header";
import styles from '../../scss/pages/Menu.module.scss'
import food from './dataBase'


const Menu = () => {
    const [words, setWords] = useState('')

    return (
      <div className={styles.main_menu}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.categori}>
            <input
              type="text"
              placeholder="Введите название блюда"
              onChange={(e) => setWords(e.target.value)}
            />
            <div className={styles.food_categori}>Блюда из пасты</div>
            <div className={styles.food_categori}>Блюда из курицы</div>
            <div className={styles.food_categori}>Блюда из говядины</div>
            <div className={styles.food_categori}>Блюда из рыбы</div>
            <div className={styles.food_categori}>Салаты</div>
            <div className={styles.food_categori}>Блюда Рабека</div>
          </div>
          <div className={styles.food}>
            {food.filter(
              (item) =>
                item.name.toUpperCase().slice(0, words.length) ===
                words.toUpperCase()
            ).map((el) => (
              <div className={styles.cart_food}>
                <img src={el.image} alt="" />
                <p>
                  <b>Название:</b> {el.name}
                </p>
                <p>
                  <b>Описание:</b> {el.description}
                </p>
                <p>
                  <b>Цена:</b> {el.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Menu;