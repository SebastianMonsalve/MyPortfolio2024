import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "../../../services/i18next.js";
import "./Header.css";

const Header = ({ handleChange, isChecked, onMenuClick, selectedSection }) => {
  const audio = new Audio("/sound-click.mp3");
  const { t } = useTranslation();

  const handleCheckboxChange = (event) => {
    audio.play();
    handleChange(event);
  };

  const changeLanguage = async (event) => {
    const lng = event.target.value;
    i18next.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
  };

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
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          <label htmlFor="check" className="toggle-container">
            <i className="bx bxs-sun"></i>
            <i className="bx bxs-moon"></i>
          </label>
          <div className="header-select-container">
            <i className="fa-solid fa-language" />
            <select
              name="language"
              className="header-select"
              onChange={changeLanguage}
              value={i18next.language}
            >
              <option value="en">{t("english")}</option>
              <option value="es">{t("spanish")}</option>
            </select>
          </div>
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
            <i className="fa-solid fa-circle-check" title={t("verified")}></i>
          </h1>
          <div className="sub">
            <span>@sebasmonsalve16</span>
            <span>
              <i className="fa-solid fa-cake-candles"></i>
              {t("birthday")}
            </span>
            <span>
              <i className="fa-solid fa-location-dot"></i>
              {t("location")}
            </span>
          </div>
          <p>{t("description")}</p>
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
            {t("projects")}
          </li>
          <li
            id="skills"
            className={selectedSection === "skills" ? "active" : ""}
            onClick={() => onMenuClick("skills")}
          >
            {t("skills")}
          </li>
          <li
            id="about"
            className={selectedSection === "about" ? "active" : ""}
            onClick={() => onMenuClick("about")}
          >
            {t("about")}
          </li>
          <li
            id="education"
            className={selectedSection === "education" ? "active" : ""}
            onClick={() => onMenuClick("education")}
          >
            {t("education")}
          </li>
        </ol>
      </nav>
      <div className="line"></div>
    </header>
  );
};

export default Header;
