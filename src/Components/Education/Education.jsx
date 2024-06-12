import React from "react";
import "./Education.css";
import { EducationData } from "./EducationData";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t, i18n } = useTranslation();

  const translateData = (data) => {
    return data.map((item) => {
      return {
        ...item,
        title: item.title[i18n.language],
        institution: item.institution[i18n.language],
      };
    });
  };

  const Education = translateData(EducationData);

  return (
    <section className="educationContainer">
      {Education.map((data, index) => (
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
