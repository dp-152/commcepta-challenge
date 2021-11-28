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

export default function Button({
  text,
  size,
  target,
  icon,
  isDisabled,
}: Props): ReactElement {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const innerButton = (
    <div
      className={
        "Button " +
        `theme-${theme} ` +
        `size-${size} ` +
        (isDisabled ? "disabled" : "")
      }
    >
      {icon ? (
        <span className="Button-icon">
          <img src={icon} alt={icon} height="45" />
        </span>
      ) : (
        ""
      )}
      <span className={"Button-text" + (icon ? "-icon" : "")}>{text}</span>
    </div>
  );
  return target === "$form-submit" ? (
    <button type="submit" disabled={isDisabled}>
      {innerButton}
    </button>
  ) : (
    <Link
      to={isDisabled ? location.pathname : target}
      className={isDisabled ? "disabled" : ""}
    >
      {innerButton}
    </Link>
  );
}
