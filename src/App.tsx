import React from "react";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";

import Main from "./routes/Main";
import Cards from "./routes/cards/Cards";
import Card from "./routes/cards/Card";
import NewCard from "./routes/cards/NewCard";
import NotFound from "./routes/NotFound";
import Container from "./Container";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="light">
        <Routes>
          <Route path="/" element={<Container />}>
            <Route
              path=""
              element={
                <ThemeContext.Provider value="dark">
                  <Main />
                </ThemeContext.Provider>
              }
            />
            <Route path="/cards">
              <Route path="" element={<Cards />} />
              <Route path=":id" element={<Card />} />
              <Route path="new" element={<NewCard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
