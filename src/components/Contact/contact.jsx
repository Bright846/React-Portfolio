import React from "react";
import { getImageurl } from "../../utils";
import style from "./contact.module.css";

const contact = () => {
  return (
    <footer id="contact" className={style.container}>
      <div className={style.text}>
        <h2>Get in touch</h2>
        <p>feel free to reach out!</p>
      </div>
      <ul className={style.links}>
        <li className={style.link}>
          <img
            src={getImageurl("contactImg/gmail.jpg")}
            alt="gmail image"
            id={style.gmail}
          />
          <a href="mailto:adarsh27102003@gmail.com">adarsh27102003@gmail.com</a>
        </li>

        <li className={style.link}>
          <img
            src={getImageurl("contactImg/git.png")}
            alt="git image"
            id={style.git}
          />
          <a href="https://github.com/Bright846">github.com/Bright846</a>
        </li>

        <li className={style.link}>
          <img
            src={getImageurl("contactImg/linkedin.png")}
            alt="linkedin image"
            id={style.linkedin}
          />
          <a href="https://www.linkedin.com/in/adarsh-tiwari-271437289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            linkedin/Adarsh Tiwari
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default contact;
