import React, { ReactElement, useCallback } from "react";

import BackButton from "../../components/BackButton";
import NewCardForm from "../../components/NewCardForm";
import VCardGeneratorIcon from "../../components/VCardGeneratorIcon";
import { CardData } from "../../data/CardData";

export default function NewCard(): ReactElement {
  const submitHandler = useCallback((data: CardData) => {
    // TODO: push to database, retrieve new ID
    console.log(data);
  }, []);

  return (
    <div>
      <VCardGeneratorIcon />
      <BackButton />
      <NewCardForm submitHandler={submitHandler} />
    </div>
  );
}
