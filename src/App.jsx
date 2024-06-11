// App.jsx
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedSection, setSelectedSection] = useState("projects");

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
    </div>
  );
}

export default App;
