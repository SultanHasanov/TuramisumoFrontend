import React from "react";
import Header from "../../Components/Header/Header";
import styles from "../../scss/pages/Relax.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function TextSection({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "translateX(1000px)" : "translateX(600%)",
            opacity: isInView ? 1 : 0,
            color: "rgb(206, 176, 113)",
            fontWeight: "100",
            zIndex: 0,
            fontSize: "2rem",
            textShadow: "0 2px 5px rgba(0, 0, 0, 50%)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {children}
        </span>
      </section>
    );
  }

const Relax = () => {
  return (
    <div className={styles.relax}>
      <Header />
      <div className={styles.title}>
        <h1>
          САНАТОРИЙ{" "}
          <span style={{ color: "rgb(206, 176, 113)" }}>«TURAMISUMO»</span> —
          ТЕРРИТОРИЯ ЗДОРОВЬЯ И ДУШЕВНОЙ ГАРМОНИИ
        </h1>
      </div>
      <div className={styles.main_relax}>
        <div className={styles.container}>
            <TextSection>
                <h1>БАССЕЙН</h1>
            </TextSection>
          <Section>
            <div className={styles.card}>
              <div className={styles.image_block}>
                <img
                  src="https://www.s-caspiy.ru/content/images/20210706_101942.jpg"
                  alt=""
                />
              </div>
              <div className={styles.descrip}>
                <span>
                  На территории санатория оборудовано 4 открытых пресноводных
                  бассейна: два для взрослых и два для детей. Бассейны
                  наполняются родниковой водой из источников санатория. В одном
                  бассейне предусмотрен подогрев воды до 27-28 °C. Период
                  функционирования открытого комплекса бассейнов — с мая по
                  октябрь. В дневное время в открытых плавательных бассейнах
                  проводятся анимационные мероприятия: аква-аэробика, игра в
                  мяч. Прилегающая территория к открытому комплексу бассейнов
                  оборудована под зону отдыха. Вокруг плавательных бассейнов
                  установлены шезлонги для отдыха и загара.
                </span>
              </div>
            </div>
          </Section>
          <TextSection>
                <h1>АКВАПАРК</h1>
            </TextSection>
          <Section>
            <div className={styles.card}>
              <div className={styles.image_block}>
                <img
                  src="https://www.s-caspiy.ru/content/images/20210713_103749.jpg"
                  alt=""
                />
              </div>
              <div className={styles.descrip}>
                <span>
                  Аквапарк - это огромный водный центр, где скучать не кому не
                  приходится. В нем находится много различных аттракционов, как
                  для детей, так и для взрослых. Есть также сауна, кафе и
                  суши-бар. Развлекательный комплекс, в котором имеется
                  инфраструктура для занятия играми на воде и водные
                  аттракционы, такие как водяные горки, поливалки, бассейны с
                  вышкой, фонтаны, «ленивая река» и другие водные развлечения.
                </span>
              </div>
            </div>
          </Section>
          <TextSection>
                <h1>КОМФОРТ</h1>
            </TextSection>
          <Section>
            <div className={styles.card}>
              <div className={styles.image_block}>
                <img
                  src="https://www.s-caspiy.ru/content/images/20200919_181547.jpg"
                  alt=""
                />
              </div>
              <div className={styles.descrip}>
                <span>
                  Аквапарк - это огромный водный центр, где скучать не кому не
                  приходится. В нем находится много различных аттракционов, как
                  для детей, так и для взрослых. Есть также сауна, кафе и
                  суши-бар. Развлекательный комплекс, в котором имеется
                  инфраструктура для занятия играми на воде и водные
                  аттракционы, такие как водяные горки, поливалки, бассейны с
                  вышкой, фонтаны, «ленивая река» и другие водные развлечения.
                </span>
              </div>
            </div>
          </Section>
          <TextSection>
                <h1>ПЛЯЖ</h1>
            </TextSection>
          <Section>
            <div className={styles.card}>
              <div className={styles.image_block}>
                <img
                  src="https://www.s-caspiy.ru/content/images/20200117_153908.jpg"
                  alt=""
                />
              </div>
              <div className={styles.descrip}>
                <span>
                  Пляж песчаный, удобный для отдыха взрослых и детей, оборудован
                  всем необходимым для комфортного времяпровождения: раздевалки,
                  лежаки, душевые кабинки, навесы. Здесь очень удобно купаться,
                  ведь дно пологое, без резких перепадов глубины, спуск в воду
                  плавный. Прозрачная вода располагает к подводной рыбалке и
                  дайвингу.
                </span>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Relax;
