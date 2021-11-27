import React, { ReactElement, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

import "../css/components/VCardGeneratorLogo.css";

export default function VCardGeneratorLogo(): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`VCardGeneratorLogo theme-${theme}`}>
      <span className={`VCardGeneratorLogo-topText theme-${theme}`}>vCard</span>
      <span className={`VCardGeneratorLogo-bottomText theme-${theme}`}>
        generator
      </span>
    </div>
  );
}
