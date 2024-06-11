import React from "react";
import "./About.css";
import { AboutData } from "./AboutData";

const About = () => {
  return (
    <section className="aboutContainer">
      {AboutData.map((data, index) => (
        <div className="about-box" key={index}>
          <div className="content-box">
            <div className="image-profile-box">
              <img src="/Profile.jpg" alt="image profile" draggable="false" />{" "}
            </div>
            <div className="content-info-box">
              <h2>Sebastian Monsalve</h2>
              <p>{data.content}</p>
            </div>
          </div>
          <div className="container-box">
            <div className="image-box">
              <img src={data.image} alt="post image" draggable="false" />
            </div>
          </div>
          <div className="options-box">
            <i className="bx bx-like" title="Like" />
            <i className="bx bx-dislike" title="Dislike" />
            <i className="bx bx-comment" title="Comment" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
