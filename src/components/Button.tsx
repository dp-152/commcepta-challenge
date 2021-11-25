import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import "../css/components/Button.css";

interface Props {
  text: string;
  theme: "dark" | "light"; // TODO: Fetch this option from context?
  size: "small" | "large";
  target: string;
  icon?: string;
}

export default function Button(props: Props): ReactElement {
  return (
    <Link to={props.target}>
      <div
        className={
          "Button " +
          `Button-theme-${props.theme} ` +
          `Button-size-${props.size}`
        }
      >
        {props.icon ? <img src={props.icon} alt={props.icon} /> : ""}
        <span>{props.text}</span>
      </div>
    </Link>
  );
}
