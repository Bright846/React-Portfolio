import React from "react";
import style from "./ProjectCard.module.css";
import { getImageurl } from "../../utils";
const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  return (
    <div className={style.container}>
      <img
        src={getImageurl(imageSrc)}
        alt={description}
        className={style.image}
      />
      <h3 className={style.title}>{title}</h3>
      <p className={style.desc}>{description}</p>
      <ul className={style.skills}>
        {skills.map((skills, id) => {
          return (
            <li key={id} className={style.skill}>
              {skills}
            </li>
          );
        })}
      </ul>
      <div className={style.links}>
        <a href={source} className={style.link}>
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
