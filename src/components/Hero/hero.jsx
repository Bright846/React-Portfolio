import React from "react";
import heroImg from "../../assets/myImg.png";
import style from "./hero.module.css";
const hero = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Hi, I'm Adarsh</h1>
        <p className={style.desc}>
          I'm a front-end developer with experience of 1 year using React. Reach
          out to me if you want to learn more about me!
        </p>
        <a href="mailto:adarsh27102003@gmail.com" className={style.contactBtn}>
          Contact me
        </a>
      </div>

      <img
        src={heroImg}
        className={style.heroImg}
        alt="Hero image of my portfolio"
      />
      <div className={style.topBlur} />
      <div className={style.bottomBlur} />
    </section>
  );
};

export default hero;
