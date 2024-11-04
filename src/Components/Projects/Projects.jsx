import React, { useState, useEffect } from "react";
import "./Projects.css";
import { ProjectsData } from "./projectsData";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(t("latest"));

  useEffect(() => {
    setSelectedCategory(t("latest"));
  }, [i18n.language, t]);

  const translateData = (data) => {
    return data.map((item) => {
      return {
        ...item,
        title: item.title[i18n.language],
        description: item.description[i18n.language],
        category: item.category[i18n.language],
      };
    });
  };

  const Projects = translateData(ProjectsData);

  const categories = [
    t("latest"),
    ...new Set(Projects.map((project) => project.category)),
  ];

  const filteredProjects = Projects.filter((project) => {
    if (selectedCategory === t("latest")) return true;
    return project.category === selectedCategory;
  });

  return (
    <section className="projectsContainer">
      <div className="filter-category-container">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-category ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <p>{category}</p>
          </button>
        ))}
      </div>

      {filteredProjects.map((item, index) => (
        <div key={index} className="project">
          <div className="image-project">
            <img src={item.image} alt={item.title} draggable="false" />
            <div className="options-project">
              {item.web ? (
                <a href={item.web} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-link" title={t("web")} />
                </a>
              ) : null}
              {item.github ? (
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github" title={t("github")} />
                </a>
              ) : null}
              {item.figma ? (
                <a href={item.figma} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-figma" title={t("figma")} />
                </a>
              ) : null}
            </div>
          </div>
          <div className="content-project">
            <a
              href={item.web || item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="title-project"
            >
              {item.title}
            </a>
            <div className="sub-project">
              <div className="sub-info">
                <span>
                  @sebasmonsalve16{" "}
                  <i className="fa-solid fa-circle-check" title="verified" />
                </span>
                <span>
                  {t("developed")} {item.year}
                </span>
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
