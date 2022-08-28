import React from "react";
import { Link } from "react-router-dom";
import sun from "./sun.png";
import "../../scss/header/header.scss";

document.onscroll = () => {
  const scrollTopPosition = document.documentElement.scrollTop;
  const header = document.querySelector("header");
  const blockImg = document.querySelector("#block_img");

  scrollTopPosition === 0
    ? (header.classList = "header")
    : (header.classList = "headers");
  scrollTopPosition === 0
    ? (blockImg.classList = "block_img")
    : (blockImg.classList = "block_img_end");
};

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav_block">
          <li>
            <Link to="/hostel">Погода</Link>
          </li>
          <li>
            <Link to="/prices">Цены</Link>
          </li>
          <li>
            <Link to="/relax">Отдых</Link>
          </li>
        </ul>

        <div id="block_img" className="block_img">
          <Link to="/">
            <img className="img" src={sun} alt="" />
          </Link>
        </div>

        <ul className="nav_block">
          <li>
            <Link to="/territory">Территория</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
          <li>
            <Link to="/sea">Море</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
