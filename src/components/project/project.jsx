import React from "react";
import Project from "../../data/project.json";
import ProjectCard from "../project/ProjectCard.jsx";
import style from "./project.module.css";

const project = () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Project</h2>
      <div className={style.projects}>
        {Project.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default project;
