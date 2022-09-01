import React, { useEffect } from "react";
import styles from "../../scss/pages/Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { VscLocation } from "react-icons/vsc";
import { GiBusStop } from "react-icons/gi";
import { Link } from "react-router-dom";
import { deleteProductFromBasket, getCart, productInc, productDec, clearBasket } from "../../features/cartSlice";
import Header from "../../Components/Header/Header";

const CartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const cart = useSelector((state) => state.cart.cart.products);
  const mainPrice = useSelector((state) => state.cart.cart.mainPrice);
  const loadingCart = useSelector((state) => state.cart.loadingCart);


  const handleDelete = (productId) => {
    dispatch(deleteProductFromBasket(productId))
  };

  const handleIncrement = (productId) => {
    dispatch(productInc(productId))
  };

  const handleDecrement = (productId) => {
    dispatch(productDec(productId))
  };

  const handleClear = () => {
    dispatch(clearBasket())
  };


  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGY1ZTU0NjkxYjIwYmUxNzczMThmYiIsImxvZ2luIjoicnIiLCJpYXQiOjE2NjE5NTE1NzMsImV4cCI6MTY2MjAzNzk3M30.CqGzL8s4aPYlS8OCZNUlYH6bVhGUnN7XxdYo-ET3doA")
  localStorage.setItem("user", "630f5e54691b20be177318fb")

  if (!loadingCart && cart) {
    const cartProducts = cart.map((product) => {
          return (
            <>
              <div className={styles.line}></div>
              <div className={styles.card_prod}>
                <div className={styles.image_block}>
                   <img src={product.productId.image} alt="" />
                </div>
                <div className={styles.info_prices}>
                  <div className={styles.prod_name}>
                    <span>{product.productId.name}</span>
                  </div>
                  <table className={styles.table}>
                    <thead>
                      <tr className={styles.tr}>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Итого</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={styles.tr}>
                        <td>{product.productId.price} ₽</td>
                        <td>
                          <button
                            className={styles.btn1}
                            onClick={() => handleIncrement(product.productId._id)}
                          >
                            +
                          </button>
                          {product.amount}
                          {product.amount === 1 ? 
                          <button
                            className={styles.btn2}
                            disabled
                          >
                            -
                          </button> : <button
                            className={styles.btn2}
                            onClick={() => handleDecrement(product.productId._id)}
                          >
                            -
                          </button>}
                        </td>
                        <td>{product.productId.price * product.amount} ₽</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={styles.next_func}>
                      <button onClick={() => handleDelete(product.productId._id)}>Удалить</button>
                  </div>
                </div>
              </div>
            </>
          );
    });

    return (
      <div className={styles.back}>
        <div className={styles.header}>
        <Header />
        <div className={styles.title}>

          <h1>КОРЗИНА ПОКУПОК</h1>
        </div>
        <div className={styles.main_content}>
          <div className={styles.cartInfo}>
            <div className={styles.products_cart}>
              <h2>Краткое описание товара</h2>
              <div className={styles.products}>{cartProducts}</div>
            </div>
          </div>
          <div className={styles.buy_info}>
            <div className={styles.buy_main}>
              <h3>ИТОГО ЗАКАЗА</h3>
              <div className={styles.itogo}>
                <span>Промежуточная цена:</span>
                <h2 className={styles.mainprice}>{mainPrice}</h2>
              </div>
              <div className={styles.btn_oplata}>
                <Link to="/buy">
                  <button>ПЕРЕЙТИ К ОПЛАТЕ</button>
                </Link>
              </div>
              <div className={styles.btn_oplata}>
                  <button onClick={handleClear}>ОЧИСТИТЬ КОРЗИНУ</button>
              </div>
            </div>
            <div className={styles.sposob_oplati}></div>
          </div>
          </div>
        </div> 
      </div>
    );
  }
};

export default CartPage;
