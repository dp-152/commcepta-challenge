import React, { ReactElement, useContext } from "react";
import { Outlet } from "react-router-dom";

import "./css/Container.css";
import logo from "./assets/logo commcepta.png";
import ThemeContext from "./contexts/ThemeContext";

export default function Container(): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="Container">
      <header className="Container-header">
        <img
          src={logo}
          alt="Logo"
          className="Container-header-logo"
          width="228"
        />
      </header>
      <main className={`Container-main theme-${theme}`}>
        <Outlet />
      </main>
      <footer className={`Container-footer theme-${theme}`}>
        <span className={`Container-footer-copyrightnotice theme-${theme}`}>
          © 2021. Docummented as Commcepter
        </span>
      </footer>
    </div>
  );
}
