import React, { ReactElement } from "react";
import Button from "../components/Button";
import VCardGeneratorIcon from "../components/VCardGeneratorIcon";

export default function Main(): ReactElement {
  return (
    <div>
      <VCardGeneratorIcon />
      <Button
        target="/cards"
        text="selecionar candidato"
        theme="dark"
        size="large"
      />
      <Button
        target="/cards/new"
        text="criar vCard do zero"
        theme="dark"
        size="large"
      />
    </div>
  );
}
