import React, { ReactElement, useCallback } from "react";
import { useNavigate } from "react-router";

import BackButton from "../../components/BackButton";
import NewCardForm from "../../components/NewCardForm";
import VCardGeneratorIcon from "../../components/VCardGeneratorIcon";
import { CardData } from "../../data/CardData";

export default function NewCard(): ReactElement {
  const nav = useNavigate();
  const submitHandler = useCallback(
    (data: CardData) => {
      // TODO: push to database, retrieve new ID
      console.log(data);
      const newID = 1;
      nav("/cards/" + newID);
    },
    [nav],
  );

  return (
    <div>
      <VCardGeneratorIcon />
      <BackButton />
      <NewCardForm submitHandler={submitHandler} />
    </div>
  );
}
