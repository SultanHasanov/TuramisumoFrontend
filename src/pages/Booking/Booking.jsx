import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { getRooms } from "../../features/roomsTypes";
import { BsBookmarkCheck } from "react-icons/bs";
import styles from "../../scss/pages/Booking.module.scss";
import { RiVisaFill } from "react-icons/ri";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { postUser } from "../../features/userSlice";

const Booking = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.room.rooms);
  const loading = useSelector((state) => state.room.loadingRooms);
  const room = rooms.find((item) => item._id === id);
  const token = useSelector((state) => state.user.token)
  console.log(token)

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("+ 7 (");
  const [age, setAge] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [card, setCard] = useState("")


  const changeCard = (e) => {
    if(card.length <= 15) {
      setCard(e.target.value)
    }
  }

  const changeName = (e) => {
      setName(e.target.value);
      console.log(e.target.value);
  };

  const changeSurname = (e) => {
    setSurname(e.target.value);
  };

  const changeLogin = (e) => {
    setLogin(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changePhone = (e) => {
    setPhone(e.target.value);
  };

  const changeAge = (e) => {
    setAge(e.target.value);
  };

  const changeStartDate = (e) => {
    console.log(new Date(e.target.value))
    setStartDate(e.target.value);
  };

  const changeEndDate = (e) => {
    console.log(e.target.value)
    setEndDate(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault()
  }


  const handlePostUser = () => {
    dispatch(postUser({name, surname, phone, login, password, age, startDate: new Date(startDate), endDate: new Date(endDate), card, id}))
  }

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  console.log(startDate, endDate);

  if (room) {
    return (
      <div className={styles.booking_bloc}>
        <Header />
        <div className={styles.header}>
          <h1 style={{ color: "rgb(206, 176, 113)" }}>Страница оплаты</h1>
          <span>
            Приветствуем вас! Компания Turamisumo глубоко уважает вашу
            конфиденциальность и ценит ваше доверие. В Политике
            конфиденциальности vivo описывается порядок сбора, использования,
            хранения, предоставления, передачи и других способов обработки ваших
            персональных данных в соответствии с применимым законодательством о
            защите персональных данных, а также ваши права определять, что мы
            можем делать с вашими персональными данными, когда вы используете
            наши устройства, аксессуары, приложения, операционные системы,
            веб-сайты, другие продукты и услуги.
          </span>
        </div>
        <div className={styles.payment}>
          <div className={styles.form_block}>
            <div className={styles.register}>
              <span>Регистрация</span>
            </div>
            <div className={styles.line}></div>
            <form className={styles.inputs} onSubmit={handleSubmit} >
              <div className={styles.name_form}>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={changeName}
                />
                <input
                  type="text"
                  required
                  placeholder="Surname"
                  value={surname}
                  onChange={changeSurname}
                />
              </div>
              <div className={styles.name_form}>
                <input
                  type="text"
                  required
                  placeholder="Login"
                  value={login}
                  onChange={changeLogin}
                />
                <input
                  type="text"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={changePassword}
                />
              </div>
              <div className={styles.name_form}>
                <input
                  type="text"
                  required
                  placeholder="Phone number"
                  value={phone}
                  onChange={changePhone}
                />
                <input
                  type="text"
                  required
                  placeholder="Age"
                  value={age}
                  onChange={changeAge}
                />
              </div>
              <div className={styles.name_form}>
                <input
                  type="date"
                  required
                  value={startDate}
                  onChange={changeStartDate}
                />
                <input
                  type="date"
                  required
                  value={endDate}
                  onChange={changeEndDate}
                />
              </div>
              <div className={styles.line_2}></div>
            <div className={styles.license}>
              <span>
                Вы соглашаетесь c правилами использования{" "}
                <a href="http://www.consultant.ru/document/cons_doc_LAW_9027/2120e9b039b6f15a3d1c793f412f7df3ffcfbd33/" target="_blank">лицензионного соглашения</a>
              </span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.btn}>
                <button onClick={handlePostUser}> <Link to="/welcome">ПЕРЕЙТИ К ОПЛАТЕ</Link></button>
            </div>
            </form>
          </div>

          <div className={styles.form_block}>
            <div className={styles.register}>
              <span>Способ оплаты </span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.sposob_oplat}>
              <div className={styles.card}>
                <span>Банковская карта</span>
              </div>
              <div className={styles.card_info}>
                <div className={styles.details}>
                  <div className={styles.icon_oplata}>
                    <span>Детали оплаты</span>
                    <div className={styles.icons}>
                      <RiVisaFill />
                      <FaCcPaypal />
                      <FaCcDiscover />
                      <FaCcMastercard />
                    </div>
                  </div>
                  <div className={styles.card_input}>
                    <input type="text" placeholder="Card Number" value={card} onChange={changeCard}/>
                  </div>
                  <div className={styles.card_date}>
                    <input type="text" placeholder="MM/YY"/>
                    <input type="text" placeholder="CVC"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Booking;
