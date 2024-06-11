import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });
  const [selectedSection, setSelectedSection] = useState("projects");

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const renderSection = () => {
    switch (selectedSection) {
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "about":
        return <About />;
      case "education":
        return <Education />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Header
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
        onMenuClick={setSelectedSection}
        selectedSection={selectedSection}
      />
      <div className="container-primary">{renderSection()}</div>
      <Footer />
    </div>
  );
}

export default App;
