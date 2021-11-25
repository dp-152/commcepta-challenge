import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./routes/Main";
import Cards from "./routes/cards/Cards";
import Card from "./routes/cards/Card";
import NewCard from "./routes/cards/NewCard";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="" element={<Main />} />
          <Route path="/cards">
            <Route path="" element={<Cards />} />
            <Route path=":id" element={<Card />} />
            <Route path="new" element={<NewCard />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
