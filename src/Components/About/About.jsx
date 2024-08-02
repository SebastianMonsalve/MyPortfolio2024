import React, { useState } from "react";
import "./About.css";
import { AboutData } from "./AboutData";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const translateData = (data) => {
    return data.map((item) => {
      return {
        ...item,
        content: item.content[i18n.language],
      };
    });
  };

  const about = translateData(AboutData);

  // Estado para manejar los íconos activos de like y dislike
  const [activeLikes, setActiveLikes] = useState(
    Array(about.length).fill(false)
  );
  const [activeDislikes, setActiveDislikes] = useState(
    Array(about.length).fill(false)
  );

  // Función para manejar el clic en el ícono de like
  const handleLikeClick = (index) => {
    const newActiveLikes = [...activeLikes];
    newActiveLikes[index] = !newActiveLikes[index];
    setActiveLikes(newActiveLikes);

    if (newActiveLikes[index] && activeDislikes[index]) {
      const newActiveDislikes = [...activeDislikes];
      newActiveDislikes[index] = false;
      setActiveDislikes(newActiveDislikes);
    }
  };

  // Función para manejar el clic en el ícono de dislike
  const handleDislikeClick = (index) => {
    const newActiveDislikes = [...activeDislikes];
    newActiveDislikes[index] = !newActiveDislikes[index];
    setActiveDislikes(newActiveDislikes);

    if (newActiveDislikes[index] && activeLikes[index]) {
      const newActiveLikes = [...activeLikes];
      newActiveLikes[index] = false;
      setActiveLikes(newActiveLikes);
    }
  };

  return (
    <section className="aboutContainer">
      {about.map((data, index) => (
        <div className="about-box" key={index}>
          <div className="content-box">
            <div className="image-profile-box">
              <img src="/Profile.webp" alt="image profile" draggable="false" />{" "}
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
            <i
              className={`bx ${
                activeLikes[index] ? "bxs-like active like" : "bx-like"
              }`}
              title="Like"
              onClick={() => handleLikeClick(index)}
            />
            <i
              className={`bx ${
                activeDislikes[index] ? "bxs-dislike active" : "bx-dislike"
              }`}
              title="Dislike"
              onClick={() => handleDislikeClick(index)}
            />
            <i className="bx bx-comment" title="Comment" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
