import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";

import Main from "./routes/Main";
import Cards from "./routes/cards/Cards";
import Card from "./routes/cards/Card";
import NewCard from "./routes/cards/NewCard";
import NotFound from "./routes/NotFound";
import Container from "./Container";
import ThemeContext, { Theme, LightOrDark } from "./contexts/ThemeContext";

function App() {
  const [themeState, setThemeState] = useState<LightOrDark>("light");
  const themeContext = {
    theme: themeState,
    setTheme: (value: LightOrDark) => {
      setThemeState(value);
    },
  } as Theme;
  return (
    <ThemeContext.Provider value={themeContext}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="" element={<Main />} />
            <Route path="/cards">
              <Route path="" element={<Cards />} />
              <Route path=":id" element={<Card />} />
              <Route path="new" element={<NewCard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
