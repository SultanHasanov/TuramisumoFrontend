import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Header from "../../Components/Header/Header";
import { addProductInCart, getCart } from '../../features/cartSlice';
import { getProducts } from '../../features/productSlice';
import styles from '../../scss/pages/Menu.module.scss'




const Menu = () => {
    const [words, setWords] = useState('')
    const [price, setPrice] = useState('')
    const [price2, setPrice2] = useState(false);
    const [all, setAll] = useState(true)

    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch])

    useEffect(() => {
      dispatch(getCart());
    }, [dispatch]);

    const food = useSelector((state) => state.products.products)

  

    const handlePrice = () => {
        setAll(false)
        setPrice(true)
        setPrice2(false)
        localStorage.setItem("user", "630ef67d62edf909c51b9375")
    }

    const handlePrice2 = () => {
      setPrice2(true)
      setAll(false)
      setPrice(false)
    }

    const handleDelete = (e) => {
      setAll(true)
      setPrice(false)  
      setPrice2(false)
      setWords(e.target.value)
    }

    // const handleAll = () => {
    //   setPrice(false)
    //   setCount(true)
    //   setPrice2(false)
    // }

    const handleBuy = (id) => {
      dispatch(addProductInCart(id))
    }

    return (
      <div className={styles.main_menu}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.categori}>
            <input
              type="text"
              placeholder="Введите название блюда"
              onChange={(e) => handleDelete(e)}
            />
            {/* <input
              type="number"
              placeholder="Введите стоимость блюда (цена от: ...)"
              onChange={(e) => setPrice(e.target.value)}
            /> */}
            <button className={styles.food_categori} onClick={handlePrice}>
              Блюда 500+
            </button>
            <button className={styles.food_categori} onClick={handlePrice2}>Блюда 350+</button>
            {/* <button className={styles.food_categori} onClick={handleAll}>
              Все блюда
            </button> */}
            <div className={styles.food_categori}>Блюда из рыбы</div>
            <div className={styles.food_categori}>Салаты</div>
            <div className={styles.food_categori}>Сортировка по цене</div>
            {/* <button onClick={handlePrice}>От дешевого</button>
            <button onClick={handlePrice2}>От дорогово</button> */}
          </div>
          {all && (
            <div className={styles.food}>
              {food
                .filter(
                  (item) =>
                    item.name.toUpperCase().slice(0, words.length) ===
                    words.toUpperCase()
                )
                .map((el) => (
                  <div className={styles.cart_food}>
                    <img src={el.image} alt="" />
                    <p>
                      <b>Название:</b> {el.name}
                    </p>
                    <p>
                      <b>Описание:</b> {el.description}
                    </p>
                    <p>
                      <b>Цена:</b> {el.price} ₽
                    </p>
                    <button onClick={() => handleBuy(el._id)}>Купить</button>
                  </div>
                ))}
            </div>
          )}
          {price && (
            <div className={styles.food}>
              {food
                .sort((a, b) => a.price - b.price)
                .map((el) => (
                  <div className={styles.cart_food}>
                    <img src={el.image} alt="" />
                    <p>
                      <b>Название:</b> {el.name}
                    </p>
                    <p>
                      <b>Описание:</b> {el.description}
                    </p>
                    <p>
                      <b>Цена:</b> {el.price} ₽
                    </p>
                  </div>
                ))}
            </div>
          )}
          {price2 && (
            <div className={styles.food}>
              {food
                .sort((a, b) => a.price - b.price)
                .reverse()
                .map((el) => (
                  <div className={styles.cart_food}>
                    <img src={el.image} alt="" />
                    <p>
                      <b>Название:</b> {el.name}
                    </p>
                    <p>
                      <b>Описание:</b> {el.description}
                    </p>
                    <p>
                      <b>Цена:</b> {el.price} ₽<p>₽</p>
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    );
};

export default Menu;