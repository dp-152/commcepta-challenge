import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

import "../css/components/Button.css";

interface Props {
  text: string;
  theme: "dark" | "light"; // TODO: Fetch this option from context?
  size: "small" | "large";
  target: string;
  icon?: string;
  isDisabled?: boolean;
}

export default function Button(props: Props): ReactElement {
  const location = useLocation();
  return (
    <Link to={props.isDisabled ? location.pathname : props.target}>
      <div
        className={
          "Button " +
          `Button-theme-${props.theme} ` +
          `Button-size-${props.size} ` +
          (props.isDisabled ? "disabled" : "")
        }
      >
        {props.icon ? <img src={props.icon} alt={props.icon} /> : ""}
        <span>{props.text}</span>
      </div>
    </Link>
  );
}
