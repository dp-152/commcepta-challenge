import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import "./css/Container.css";
import logo from "./assets/logo commcepta.png";

export default function Container(): ReactElement {
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
      <main className="Container-main">
        <Outlet />
      </main>
      <footer className="Container-footer">
        <span className="Container-footer-copyrightnotice">
          © 2021. Docummented as Commcepter
        </span>
      </footer>
    </div>
  );
}
