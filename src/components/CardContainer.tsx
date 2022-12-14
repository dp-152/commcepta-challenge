import React, { ReactElement, useContext } from "react";

import "../css/components/CardContainer.css";
import logoIcon from "../assets/icon commcepta.png";
import logoText from "../assets/logo commcepta.png";
import ThemeContext from "../contexts/ThemeContext";

interface Props {
  firstName: string;
  lastName: string;
  position: string;
  b64QrCode: string;
}

export default function CardContainer({
  firstName,
  lastName,
  position,
  b64QrCode,
}: Props): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`CardContainer theme-${theme}`}>
      <div className="CardContainer-inner">
        <div className="CardContainer-top">
          <div className="CardContainer-details">
            <span className="CardContainer-name">{firstName}</span>
            <span className="CardContainer-name">{lastName}</span>
            <svg viewBox="0 0 335 45" className="CardContainer-position">
              <text x="1" y="29" className="CardContainer-position-svgText">
                {position}
              </text>
            </svg>
          </div>
          <div className="CardContainer-icon">
            <img src={logoIcon} alt="Logo icon" />
          </div>
        </div>
        <div className="CardContainer-qrcode">
          <img src={`data:image/png;base64,${b64QrCode}`} alt="QR Code" />
        </div>
        <div className="CardContainer-logo">
          <img src={logoText} alt="Logo commcepta" />
        </div>
      </div>
    </div>
  );
}
