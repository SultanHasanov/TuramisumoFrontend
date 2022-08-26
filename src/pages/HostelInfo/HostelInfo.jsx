import React from "react";
import Header from "../../Components/Header/Header";
import styles from "../../scss/pages/HostelInfo.module.scss";
import lounger from "./lounger.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import suns from "./suns.png";
import clouds from "./clouds.png";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function ImageSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
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

const showDate = new Date();
const mouthDate =
  showDate.getDate() +
  "/" +
  (showDate.getMonth() + 1) +
  "/" +
  showDate.getFullYear();
const dr = showDate.toDateString();
const displayTime =
  showDate.getHours() +
  "/" +
  showDate.getMinutes() +
  "/" +
  showDate.getSeconds();


    if(dr === "Fri Aug 26 2022") {
      console.log(dr)
    }



const HostelInfo = () => {
  return (
    <div className={styles.hostel_main}>
      <Header />
      <div className={styles.title}>
        <h1 style={{ color: "rgb(206, 176, 113)" }}>{mouthDate}</h1>
      </div>
    </div>
  );
};

export default HostelInfo;
