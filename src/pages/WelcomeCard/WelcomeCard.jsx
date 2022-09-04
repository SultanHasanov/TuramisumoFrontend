import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
import { getUser } from "../../features/userSlice";
import styles from "../../scss/pages/Welcome.module.scss";
import { getRooms } from "../../features/roomsTypes";
import { getNumbers } from "../../features/numberSlice";

const WelcomeCard = () => {
  const userInfo = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.room.rooms);
  const numbers = useSelector((state) => state.numbers.numbers);
  const preloader = useSelector((state) => state.numbers.loader);
  console.log(numbers);
  //   const userRoom = numbers.filter((item) => item._id === userInfo.room);

  //   const getNums = rooms.filter((item) => item._id === userRoom[0].roomTypeId);
  //   console.log(getNums[0].name);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNumbers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  if (preloader) {
    <div>123OPDOPWDAPDOPAWDPAWPDOMDPOWDMA</div>;
  } else if (numbers) {
    return (
      <div className={styles.main}>
        <Header />
        <div className={styles.header_title}>
          <h1>ВЫДАЧА ВАШЕЙ КАМПУСНОЙ КАРТЫ</h1>
        </div>
        <div className={styles.main_card}>
          <div className={styles.user_info}>
            <div className={styles.title_card}>
              <h1>Ваша уникальная карта</h1>
            </div>
            <div className={styles.info_block}>
              <div className={styles.name_block}>
                <h3>Name</h3>
                <span>{userInfo.name}</span>
              </div>
              <div className={styles.name_block}>
                <h3>Surname</h3>
                <span>{userInfo.surname}</span>
              </div>
              <div className={styles.name_block}>
                <h3>Login</h3>
                <span>{userInfo.login}</span>
              </div>
              <div className={styles.name_block}>
                <h3>Age</h3>
                <span>{userInfo.age}</span>
              </div>
              <div className={styles.name_block}>
                <h3>Phone</h3>
                <span>{userInfo.phone}</span>
              </div>
              <div className={styles.name_block}>
                <h3>Card info</h3>
                <span>{userInfo.card}</span>
              </div>
            </div>
          </div>
          <div className={styles.user_info}>
            <div className={styles.title_card}>
              <h1>Детали поездки</h1>
            </div>
            <div className={styles.info_block}>
              <div className={styles.name_block}>
                <h3>Поездка запланирована с:</h3>
                <span>
                  {userInfo.startDate && userInfo.startDate.slice(0, 10)}
                </span>
              </div>
              <div className={styles.name_block}>
                <h3>До:</h3>
                <span>{userInfo.endDate && userInfo.endDate.slice(0, 10)}</span>
              </div>
              <div className={styles.name_block}>
                <h3>Начальный чек:</h3>
                <span>{userInfo.cash} ₽</span>
              </div>
              <div className={styles.name_block}>
                <h3>Статус брони:</h3>
                <span>
                  {userInfo.isActive === false ? "Активен" : "Неактивен"}
                </span>
              </div>
              <div className={styles.room_number}>
                <h3>Серийный номер вашей комнаты:</h3>
                <span>{userInfo.room}</span>
              </div>
              {/* <span>{getNums[0].name && getNums[0].name}</span> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default WelcomeCard;
