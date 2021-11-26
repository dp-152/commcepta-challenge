import React, { ReactElement } from "react";
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
    <div>
      <span>{firstName}</span>
      <span>{lastName}</span>
      <span>{position}</span>
      <img src={logoIcon} alt="Logo icon" />
      <img src={`data:image/png;base64,${b64QrCode}`} alt="QR Code" />
      <img src={logoText} alt="Logo commcepta" />
    </div>
  );
}
