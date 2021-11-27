import React, { ReactElement } from "react";

import Button from "../components/Button";
import VCardGeneratorLogo from "../components/VCardGeneratorLogo";

import "../css/routes/Main.css";

import iconCarinha from "../assets/icon carinha.svg";
import iconVCard from "../assets/icon vcard.svg";

export default function Main(): ReactElement {
  return (
    <section className="MainPage-wrapper">
      <VCardGeneratorLogo />
      <Button
        icon={iconCarinha}
        target="/cards"
        text="selecionar candidato"
        theme="dark"
        size="large"
      />
      <Button
        icon={iconVCard}
        target="/cards/new"
        text="criar vCard do zero"
        theme="dark"
        size="large"
      />
    </section>
  );
}
