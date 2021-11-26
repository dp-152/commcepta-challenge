import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import backButton from "../assets/botão voltar.png";

export default function BackButton(): ReactElement {
  const nav = useNavigate();
  return (
    <button
      onClick={() => {
        nav(-1);
      }}
    >
      <img src={backButton} alt="back-button" />
    </button>
  );
}
