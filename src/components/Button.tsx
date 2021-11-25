import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import "../css/components/Button.css";

interface Props {
  text: string;
  theme: "dark" | "light";
  size: "small" | "large";
  target: string;
  icon?: string;
}

export default function Button(props: Props): ReactElement {
  return (
    <Link to={props.target}>
      {props.icon ? <img src={props.icon} alt={props.icon} /> : ""}
      <span
        className={
          "Button " +
          `Button-theme-${props.theme} ` +
          `Button-size-${props.size}`
        }
      >
        {props.text}
      </span>
    </Link>
  );
}
