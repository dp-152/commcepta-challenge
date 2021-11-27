import React, { ReactElement, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";

import "../css/components/Button.css";

interface Props {
  text: string;
  size: "small" | "large";
  target: string;
  icon?: string;
  isDisabled?: boolean;
}

export default function Button(props: Props): ReactElement {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  return (
    <Link to={props.isDisabled ? location.pathname : props.target}>
      <div
        className={
          "Button " +
          `theme-${theme} ` +
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
