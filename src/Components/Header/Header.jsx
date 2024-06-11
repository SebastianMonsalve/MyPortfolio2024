import React from "react";
import "./Header.css";

const Header = ({ handleChange, isChecked, onMenuClick, selectedSection }) => {
  return (
    <header>
      <div className="banner">
        <img
          src="/banner.jpg"
          alt="Banner image to Sebastian Monsalve"
          draggable="false"
        />
        <div>
          <input
            type="checkbox"
            id="check"
            className="toggle"
            onChange={handleChange}
            checked={isChecked}
          />
          <label htmlFor="check" className="toggle-container">
            {" "}
            <i className="bx bxs-sun"></i>
            <i className="bx bxs-moon"></i>
          </label>
          <audio id="switchSound">
            <source src="/sound-click.mp3" type="audio/mp3" />
          </audio>
        </div>
      </div>
      <div className="container-info">
        <div className="profile">
          <img
            src="/Profile.jpg"
            alt="Profile photo to Sebastian Monsalve"
            draggable="false"
          />
        </div>
        <div className="presentation">
          <h1 title="Sebastian Monsalve">
            Sebastian Monsalve
            <i className="fa-solid fa-circle-check" title="verified"></i>
          </h1>
          <div className="sub">
            <span>@sebasmonsalve16</span>
            <span>
              <i className="fa-solid fa-cake-candles"></i>16th of May
            </span>
            <span>
              <i className="fa-solid fa-location-dot"></i>Colombian
            </span>
          </div>
          <p>
            Aspiring computer engineer drawn towards full-stack development,
            eagerly embracing the challenges and complexities of creating
            seamless and innovative digital solutions.
          </p>
          <a
            className="link"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jsmonsalvec16@gmail.com"
            target="_blank"
          >
            jsmonsalvec16@gmail.com
          </a>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/sebastianmonsalve16/"
              className="in"
              title="LinkedIn"
              target="_blank"
            >
              <i className="fa-solid fa-bell" target="_blank"></i>LinkedIn
              <span>⌵</span>
            </a>
            <a
              href="https://www.instagram.com/sebasmonsalve16/"
              className="soc"
              title="Instagram"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/SebastianMonsalve"
              className="soc"
              title="GitHub"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <nav>
        <ol id="menu">
          <li
            id="projects"
            className={selectedSection === "projects" ? "active" : ""}
            onClick={() => onMenuClick("projects")}
          >
            Projects
          </li>
          <li
            id="skills"
            className={selectedSection === "skills" ? "active" : ""}
            onClick={() => onMenuClick("skills")}
          >
            Skills
          </li>
          <li
            id="about"
            className={selectedSection === "about" ? "active" : ""}
            onClick={() => onMenuClick("about")}
          >
            About Me
          </li>
          <li
            id="education"
            className={selectedSection === "education" ? "active" : ""}
            onClick={() => onMenuClick("education")}
          >
            Education
          </li>
        </ol>
      </nav>
      <div className="line"></div>
    </header>
  );
};

export default Header;
