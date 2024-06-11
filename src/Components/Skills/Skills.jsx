import React from "react";
import "./Skills.css";
import { SkillsData } from "./SkillsData";

const Skills = () => {
  return (
    <section className="skillsContainer">
      {SkillsData.map((item, index) => (
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
