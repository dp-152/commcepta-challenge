import React, { ReactElement } from "react";

import Button from "../components/Button";
import VCardGeneratorIcon from "../components/VCardGeneratorIcon";

import iconCarinha from "../assets/icon carinha.svg";
import iconVCard from "../assets/icon vcard.svg";

export default function Main(): ReactElement {
  return (
    <div>
      <VCardGeneratorIcon />
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
    </div>
  );
}
