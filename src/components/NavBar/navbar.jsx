import React, { useState } from "react";

import style from "./navbar.module.css";
import closeImg from "../../assets/close.png";
import menuImg from "../../assets/menu.png";
const NavBar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <nav className={style.navBar}>
      <a href="#" className={style.title}>
        Portfolio
      </a>
      <div className={style.menu}>
        <img
          src={menuOpen ? closeImg : menuImg}
          alt="Menu Image"
          className={style.menuBtn}
          onClick={() => {
            setmenuOpen(!menuOpen);
          }}
        />
        <ul
          className={`${style.menuItems} ${menuOpen && style.menuOpen}`}
          onClick={() => {
            setmenuOpen(false);
          }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
