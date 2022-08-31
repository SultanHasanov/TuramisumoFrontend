import React from "react";
import Header from "../../Components/Header/Header";
import styles from "../../scss/pages/Sea.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

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
          transform: isInView ? "translateX(1100px)" : "translateX(600%)",
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

function ButtonSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "translateX(540px)" : "translateX(-100%)",
          opacity: isInView ? 1 : 0,
          fontWeight: "100",
          width: "30rem",
          display: "flex",
          justifyContent: "left",
          zIndex: 0,
          fontSize: "2rem",
          textShadow: "0 2px 5px rgba(0, 0, 0, 50%)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Sea = () => {
  return (
    <div className={styles.relax}>
      <Header />
      <div className={styles.seaTitle}>
        <h1>
          ЦЕНЫ
          <span style={{ color: "rgb(206, 176, 113)" }}> «TURAMISUMO»</span>
        </h1>
      </div>
      <div className={styles.seaText}>
        Отель TURAMISUMO не только предостовляет своим постояльцам лучшие
        номера, но и возможность веселого времяпровождения.
        <br />
        Хоть мы и не можем предоставить чего нибудь нового, но уже существующие
        мероприятия мы отточили до совершенства.
        <br /> Мы предоставляем возможность как для спокойного, так и
        экстремального отдыха.
      </div>
      <div className={styles.main_relax}>
        <div className={styles.container}>
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
                  дайвингу. Пляж постоянно чистится и дарит чувство спокойствия.
                </span>
              </div>
            </div>
          </Section>
          <TextSection>
            <h1>БАРЫ</h1>
          </TextSection>
          <Section>
            <div className={styles.card}>
              <div className={styles.image_block}>
                <img
                  src="https://www.vincent-realty.ru/upload/resize_cache/iblock/83d/640_480_0598c859b54d0b4b6de247e2a3808f028/83daa85b0c8386e671f2ff288a4486db.JPG"
                  alt=""
                />
              </div>
              <div className={styles.descrip}>
                <span>
                  На территории пляжа находится множество баров и ресторанов. В
                  барах подается газировка и алькогольные напитки. Идеальное
                  место для культурного отдыха или небольшой передышки между
                  весельем. Также, в барах имеется вечерняя программа. В
                  программе учавствуют бармены показывая высший класс в
                  приготовлении коктелей. В ресторанах вы моежете утолить свой
                  голод. Там подаются не только классические блюда, но и
                  изысканные и свежайшие морепродукты, выловленные нашими
                  сотрудниками.
                </span>
              </div>
            </div>
          </Section>
          <TextSection>
            <h1>СЕКЦИИ</h1>
          </TextSection>
          <Section>
            <div className={styles.card}>
              <div className={styles.image_block}>
                <img
                  src="https://thumbs.dreamstime.com/b/%D0%B2%D0%BE%D0%BB%D0%B5%D0%B9%D0%B1%D0%BE%D0%BB-%D0%BF%D0%BB%D1%8F%D0%B6%D0%B0-%D1%81%D0%B5%D1%82%D1%87%D0%B0%D1%82%D1%8B%D0%B9-138235082.jpg"
                  alt=""
                />
              </div>
              <div className={styles.descrip}>
                <span>
                  На территории пляжа вы моежете встретить множество кружков и
                  секций. Помимо классических пляжных игр по типу волейбола и
                  метания диска, у нас имеются также секции по: покеру, футболу,
                  тенису, блэкджеку, вышиванию, бегу и плаванию. Таким образом
                  вы получите не только хорошие впечетления, но и полезные
                  навыки. Все секции бесплатны, но посещать их могут лишь с 18
                  лет.{" "}
                </span>
              </div>
            </div>
          </Section>
          <TextSection>
            <h1>Развлечения</h1>
          </TextSection>
          <Section>
            <div className={styles.card}>
              <div className={styles.image_block}>
                <img
                  src="https://s0.rbk.ru/v6_top_pics/media/img/4/25/756564262675254.jpg"
                  alt=""
                />
              </div>
              <div className={styles.descrip}>
                <span>
                  На протяжениие всего пляжа вы моежете встретить различные
                  увеселитильные мероприятия. Вы можете с ветерком прокатится на
                  гидроскутере. Или отправиться в небольшое путешествие на
                  катере. В компании из трех человек вы можете вы можете
                  прокатиться на круге. Или же воспарить в небеса на парашюте.
                  Вы можете заплатить на месте или занять очередь на месте
                  регистрации.{" "}
                </span>
              </div>
            </div>
          </Section>
          <ButtonSection>
            <Link to="/prices">
              <button>ПРОСМОТРЕТЬ ЦЕНЫ</button>
            </Link>
          </ButtonSection>
        </div>
      </div>
    </div>
  );
};

export default Sea;
