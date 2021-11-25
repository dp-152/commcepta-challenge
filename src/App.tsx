import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="" element={<h2>Hello from "/"!</h2>} />
          <Route path="/cards">
            <Route path="" element={<h2>Hello from "/cards"!</h2>} />
            <Route path=":id" element={<h2>Hello from "/cards/:id"!</h2>} />
            <Route path="new" element={<h2>Hello from "/cards/new"!</h2>} />
          </Route>
        </Route>
        <Route path="*" element={<h2>Page not found!</h2>} />
      </Routes>
    </div>
  );
}

export default App;
