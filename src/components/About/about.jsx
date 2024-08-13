import React from "react";
import style from "./about.module.css";
import cursor from "../../assets/cursor.png";
import project from "../../../assets/project/images.jpg";
import { getImageurl } from "../../utils";

const About = () => {
  return (
    <section className={style.container} id="about">
      <h2 className={style.title}>About</h2>
      <div className={style.content}>
        <img
          src={project}
          alt="Me Sitting with a Laptop"
          className={style.aboutImg}
        />
        <ul className={style.aboutItems}>
          <li className={style.aboutItem}>
            <img src={cursor} alt="Cursor" className={style.cursorImg} />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building a
                responsive and interactive sites{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
