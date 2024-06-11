import React from "react";
import "./Education.css";
import { EducationData } from "./EducationData";

const Education = () => {
  return (
    <section className="educationContainer">
      {EducationData.map((data, index) => (
        <div className="education" key={index}>
          <div className="icon-edu">
            <i className={data.icon}></i>
          </div>
          <div className="content-edu">
            <h5>{data.period}</h5>
            <h3>{data.title}</h3>
            <p>{data.institution}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
