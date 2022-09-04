import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Header from "../../Components/Header/Header";
import { addProductInCart } from '../../features/cartSlice';
import { getCategory, getProductsBank } from '../../features/productSlice';
import styles from '../../scss/pages/Menu.module.scss'
// import { useAlert } from 'react-alert';
import { useNavigate, useParams } from 'react-router-dom';



const MenuId = () => {

  // const alert = useAlert()

  const navigate = useNavigate()
  const [words, setWords] = useState("");
  const [price, setPrice] = useState(false);
  const [price2, setPrice2] = useState(false);
  const [all, setAll] = useState(true);


  const dispatch = useDispatch();

  const { typeId } = useParams()

  useEffect(() => {
    dispatch(getProductsBank(typeId));
  }, [typeId]);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);


  const food = useSelector((state) => state.products.products);
  const category = useSelector((state) => state.products.category);

  const handlePrice = () => {
    setAll(false);
    setPrice(true);
    setPrice2(false);
  };

  const handlePrice2 = () => {
    setPrice2(true);
    setAll(false);
    setPrice(false);
  };

  const handleDelete = (e) => {
    setAll(true);
    setPrice(false);
    setPrice2(false);
    setWords(e.target.value);
  };

  const handleBuy = (id) => {
    dispatch(addProductInCart(id))
  }

  const delivery = localStorage.getItem("delivery")
  // const handleOrder = () => {
  //   setMessage(true)
  //   // alert("Ваш заказ добавлен в карзину");
  // };

  // const handleAll = () => {
  //   setPrice(false)
  //   setCount(true)
  //   setPrice2(false)
  // }

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
          {/* <button className={styles.food_categori} onClick={handlePrice}>
              Блюда 500+
            </button>
            <button className={styles.food_categori} onClick={handlePrice2}>
              Блюда 350+
            </button> */}
          {/* <button className={styles.food_categori} onClick={handleAll}>
              Все блюда
            </button> */}
          <button className={styles.food_categori} onClick={() => navigate(`/menu`)}>Все продукты</button>
          {category.map((el) => {
            return(
             <button className={styles.food_categori} onClick={() => navigate(`/menu/${el._id}`)}>{el.name}</button>
            )
          })}
          <button className={styles.food_categori}>Поиск по цене</button>
          <button onClick={handlePrice}>От дешевого</button>
          <button onClick={handlePrice2}>От дорогого</button>
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
                  {delivery === 'room' && el.categoryId === "63104c2ba42da448c58ffa61" ? <button disabled>Нельзя заказывать  в номер</button> : <button onClick={() => handleBuy(el._id)}>Купить</button>}
                  {/* <button
                    onClick={() => {
                      alert.show("Oh look, an alert!");
                    }}
                  >
                    Show Alert
                  </button> */}
                </div>
              ))}
          </div>
        )}
        {price && (
          <div className={styles.food}>
            {food
              .slice(0)
              ?.sort((a, b) => a.price - b.price)
              ?.map((el) => (
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
                  {delivery && el.categoryId === "63104c2ba42da448c58ffa61" ? <button disabled>Нельзя заказывать  в номер</button> : <button onClick={() => handleBuy(el._id)}>Купить</button>}
                </div>
              ))}
          </div>
        )}
        {price2 && (
          <div className={styles.food}>
            {food
              ?.slice(0)
              ?.sort((a, b) => b.price - a.price)
              ?.map((el) => (
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
                  {delivery && el.categoryId === "63104c2ba42da448c58ffa61" ? <button disabled>Нельзя заказывать  в номер</button> : <button onClick={() => handleBuy(el._id)}>Купить</button>}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuId;
