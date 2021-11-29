import React, { ReactElement, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

import "../css/components/VCardGeneratorLogo.css";

export default function VCardGeneratorLogo(): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`VCardGeneratorLogo theme-${theme}`}>
      <span className={`VCardGeneratorLogo-topText theme-${theme}`}>vCard</span>
      <svg
        viewBox="0 0 450 50"
        className={`VCardGeneratorLogo-svgContainer theme-${theme}`}
      >
        <text y="20" className={`VCardGeneratorLogo-svgText theme-${theme}`}>
          generator
        </text>
      </svg>
    </div>
  );
}
