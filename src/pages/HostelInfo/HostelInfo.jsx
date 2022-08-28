import React from "react";
import Header from "../../Components/Header/Header";
import styles from "../../scss/pages/HostelInfo.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import sun from "./suns.png";

const apikey = "aa19d79f332adb84786cec8a761e4598";

const HostelInfo = () => {
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Izberbash&units=imperial&APPID=${apikey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        });

  // useEffect(() => {
  //   getWeather()
  // }, [])

  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "translateY(50px)" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {children}
        </span>
      </section>
    );
  }

  return (
    <div className={styles.hostel_main}>
      <Header />
      <div className={styles.title}>
        <h1 style={{ color: "rgb(206, 176, 113)" }}>Погода в Избербаше!</h1>
        <span></span>
      </div>
      {typeof weatherData.main === "undefined" ? (
        <div className={styles.title_weather}></div>
      ) : (
        <>
          <div className={styles.result_weather}>
            <h1>{weatherData.name}</h1>
            <span>{Math.round(((weatherData.main.temp - 32) * 5) / 9)} °C</span>
          </div>
        </>
      )}
    </div>
  );
};

export default HostelInfo;
