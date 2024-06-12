import React from "react";
import "./Skills.css";
import { SkillsData } from "./SkillsData";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t, i18n } = useTranslation();

  const translateData = (data) => {
    return data.map((item) => {
      return {
        ...item,
        category: item.category[i18n.language],
      };
    });
  };

  const Skills = translateData(SkillsData);

  return (
    <section className="skillsContainer">
      {Skills.map((item, index) => (
        <div key={index} className="category">
          <h3>{item.category}</h3>
          {item.items.map((skill, index) => (
            <span key={index}>
              <i className={skill.icon} />
              <p>{skill.name}</p>
            </span>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
