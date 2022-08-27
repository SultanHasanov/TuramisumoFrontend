import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../scss/pages/RoomPage.module.scss";
import { getRooms } from "../../features/roomsTypes";
import "react-slideshow-image/dist/styles.css";
import { GiSofa } from "react-icons/gi";
import Header from "../../Components/Header/Header";
import { MdPeopleOutline } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { GiWashingMachine } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";

const RoomPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const rooms = useSelector((state) => state.room.rooms);
  const loading = useSelector((state) => state.room.loadingRooms);
  const room = rooms.find((item) => item._id === id);
  useEffect(() => {
    dispatch(getRooms());
  }, []);
  console.log(room);

  if (loading) {
    return <div>loading...</div>;
  } else if (room) {
    return (
      <div className={styles.room_main}>
        <Header />
        <div className={styles.title}>
          <h1 style={{ color: "rgb(206, 176, 113)" }}>{room.name}</h1>
          <span>Ваше удобство для нас на первом месте!</span>
        </div>
        <div className={styles.descrip_main}>
          <div className={styles.image_block}>
            <button>ЗАБРОНИРОВАТЬ</button>
          </div>
          <div className={styles.room_aminit}>
            <h1>Удобства в номере</h1>
            <div className={styles.line}></div>
            <div className={styles.uslugs}>
              <div className={styles.usluga_1}>
                <GiSofa fontSize={"3.5rem"} />
                <span>Couch</span>
              </div>
              <div className={styles.usluga_1}>
                <MdPeopleOutline fontSize={"3.5rem"} />
                <span>2 - 6 people</span>
              </div>
              <div className={styles.usluga_1}>
                <AiOutlineWifi fontSize={"3.5rem"} />
                <span>Free WIFI</span>
              </div>
              <div className={styles.usluga_1}>
                <GiWashingMachine fontSize={"3.5rem"} />
                <span>Washer</span>
              </div>
              <div className={styles.usluga_1}>
                <MdFoodBank fontSize={"3.5rem"} />
                <span>Room Service</span>
              </div>
            </div>
            <div className={styles.overview}>
              <h1>Обзор комнаты</h1>
              <div className={styles.line_2}></div>
              <span>
                В корпусах обустроены 1-2-х комнатные номера. Здесь созданы все
                условия, которые необходимы для полноценного и комфортного
                отдыха вдали от дома. Пребывание здесь - это не только здоровый
                и полноценный отдых, но и отличная возможность проживать в
                условиях, максимально приближенных к домашним. Приезжайте в
                санаторий «Turamisumo», располагайтесь в удобных номерах и будьте,
                как дома!
              </span>
            </div>
            <div className={styles.overview}>
              <h1>Домашние правила</h1>
              <div className={styles.line_2}></div>
              <div className={styles.home_rules}>
                <h2>Уборка комнаты:</h2>
                <span>9:00 - 9:30</span>
              </div>
              <div className={styles.line_3}></div>

              <div className={styles.home_rules}>
                <h2>Заносить еду с ресторана:</h2>
                <span>Нельзя</span>
              </div>
              <div className={styles.line_3}></div>

              <div className={styles.home_rules}>
                <h2>Предоплата:</h2>
                <span>По желанию</span>
              </div>
              <div className={styles.line_3}></div>

              <div className={styles.home_rules}>
                <h2>Домашние питомцы:</h2>
                <span>Запрещены</span>
              </div>
              <div className={styles.line_3}></div>

              <div className={styles.home_rules}>
                <h2>Дополнительная информация:</h2>
                <span>
                  При сильных шумах соседей обращаться к администрации, или
                  написать в службу поддержки. Если сосед не вразумился, и не собирается сбрасывать свой темп, то у нас есть услуга Лерг улле т1ар, помогает и расслабляет! Служба поддержки работает
                  круглосуточно, все ваши вопросы будут решены моментально!
                </span>
              </div>
              <div className={styles.line_3}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RoomPage;
