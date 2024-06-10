//para que no resalte las importaciones que no se usen, instalar: npm install eslint eslint-plugin-react eslint-plugin-import eslint-config-airbnb --save-dev

import React, { useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Header isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  );
}

export default App;
