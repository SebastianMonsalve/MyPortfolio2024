import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <Router>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Header isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
