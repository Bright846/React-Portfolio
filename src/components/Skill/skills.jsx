import React from "react";
import style from "./skills.module.css";
import skills from "../../data/skills.json";
import { getImageurl } from "../../utils";

const experience = () => {
  return (
    <section id="skills" className={style.container}>
      <h2 className={style.title}>Skills</h2>
      <div className={style.content}>
        <div className={style.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={style.skill}>
                <div className={style.skillContainer}>
                  <img src={getImageurl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default experience;
