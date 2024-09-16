import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "../../../services/i18next.js";
import "./Header.css";

const Header = ({ handleChange, isChecked }) => {
  const audio = new Audio("/sound-click.mp3");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const navigationMap = {
    projects: "/",
    skills: "/skills",
    about: "/about",
    education: "/education",
  };

  const getActiveSection = () => {
    const currentPath = location.pathname;
    return (
      Object.keys(navigationMap).find(
        (key) => navigationMap[key] === currentPath
      ) || "projects"
    );
  };

  const handleNavigation = (section) => {
    navigate(navigationMap[section]);
  };

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
            <i className="bx bxs-sun" />
            <i className="bx bxs-moon" />
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
            src="/Profile.webp"
            alt="Profile photo to Sebastian Monsalve"
            draggable="false"
          />
        </div>
        <div className="presentation">
          <h1 title="Sebastian Monsalve">
            Sebastian Monsalve
            <i className="fa-solid fa-circle-check" title={t("verified")} />
          </h1>
          <div className="sub">
            <span>@sebasmonsalve16</span>
            <span>
              <i className="fa-solid fa-cake-candles" />
              {t("birthday")}
            </span>
            <span>
              <i className="fa-solid fa-location-dot" />
              {t("location")}
            </span>
          </div>
          <p>{t("description")}</p>
          <a
            className="link"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jsmonsalvec16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            jsmonsalvec16@gmail.com
          </a>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/sebastianmonsalve16/"
              className="in"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-bell" target="_blank" />
              LinkedIn
              <span>⌵</span>
            </a>
            <a
              href="https://www.instagram.com/sebasmonsalve16/"
              className="soc"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://github.com/SebastianMonsalve"
              className="soc"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>
      <nav>
        <ol id="menu">
          {Object.keys(navigationMap).map((section) => (
            <li
              key={section}
              id={section}
              className={getActiveSection() === section ? "active" : ""}
              onClick={() => handleNavigation(section)}
            >
              {t(section)}
            </li>
          ))}
        </ol>
      </nav>

      <div className="line"></div>
    </header>
  );
};

export default Header;
