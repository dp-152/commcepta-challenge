import React, { ReactElement, useContext, useEffect } from "react";

import Button from "../components/Button";
import VCardGeneratorLogo from "../components/VCardGeneratorLogo";

import "../css/routes/Main.css";

import iconCarinha from "../assets/icon carinha.svg";
import iconVCard from "../assets/icon vcard.svg";
import ThemeContext from "../contexts/ThemeContext";

export default function Main(): ReactElement {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <section className="MainPage-wrapper">
      <VCardGeneratorLogo />
      <Button
        icon={iconCarinha}
        target="/cards"
        text="selecionar candidato"
        size="large"
      />
      <Button
        icon={iconVCard}
        target="/cards/new"
        text="criar vCard do zero"
        size="large"
      />
    </section>
  );
}
