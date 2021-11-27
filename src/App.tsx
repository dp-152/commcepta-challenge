import React from "react";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";

import Main from "./routes/Main";
import Cards from "./routes/cards/Cards";
import Card from "./routes/cards/Card";
import NewCard from "./routes/cards/NewCard";
import NotFound from "./routes/NotFound";
import Container from "./Container";
import DarkThemeContext from "./contexts/DarkThemeContext";

function App() {
  return (
    <div className="App">
      <DarkThemeContext.Provider value="light">
        <Routes>
          <Route path="/" element={<Container />}>
            <Route
              path=""
              element={
                <DarkThemeContext.Provider value="dark">
                  <Main />
                </DarkThemeContext.Provider>
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
      </DarkThemeContext.Provider>
    </div>
  );
}

export default App;
