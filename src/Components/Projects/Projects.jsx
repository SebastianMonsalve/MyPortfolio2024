import React from "react";
import "./Projects.css";
import { ProjectsData } from "./projectsData";

const Projects = () => {
  return (
    <section className="projectsContainer">
      {ProjectsData.map((item, index) => (
        <div key={index} className="project">
          <div className="image-project">
            <img src={item.image} alt={item.title} draggable="false" />
            <div className="options-project">
              <a href={item.github} target="_blank">
                <i className="fa-brands fa-github" title="View GitHub" />
              </a>
              <a href={item.web} target="_blank">
                <i className="fa-solid fa-link" title="View website" />
              </a>
            </div>
          </div>
          <div className="content-project">
            <h2>{item.title}</h2>
            <div className="sub-project">
              <div className="sub-info">
                <span>
                  @sebasmonsalve16{" "}
                  <i className="fa-solid fa-circle-check" title="verified" />
                </span>
                <span>Developed in {item.year}</span>
              </div>
              <div className="sub-tech">
                {item.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
