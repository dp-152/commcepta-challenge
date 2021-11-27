import React, { ReactElement } from "react";

import "../css/components/CardContainer.css";
import logoIcon from "../assets/icon commcepta.png";
import logoText from "../assets/logo commcepta.png";

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
  return (
    <div className="CardContainer">
      <div className="CardContainer-top">
        <div className="CardContainer-details">
          <span className="CardContainer-name">{firstName}</span>
          <span className="CardContainer-name">{lastName}</span>
          <span className="CardContainer-position">{position}</span>
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
  );
}
