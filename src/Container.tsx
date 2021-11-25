import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function Container(): ReactElement {
  return (
    <div>
      <h1>TOP</h1>
      <Outlet />
      <p>BOTTOM</p>
    </div>
  );
}
