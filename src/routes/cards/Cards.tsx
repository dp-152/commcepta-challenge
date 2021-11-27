import React, { ReactElement, useState, useEffect } from "react";

import useInputState from "../../hooks/useInputState";

import Button from "../../components/Button";
import SelectField, {
  Option as SelectOption,
} from "../../components/SelectField";
import VCardGeneratorLogo from "../../components/VCardGeneratorLogo";
import BackButton from "../../components/BackButton";
import repo from "../../repository/DefaultCommceptersRepository";
import { CardData } from "../../data/CardData";

export default function Cards(): ReactElement {
  const [selOpts, setSelOpts] = useState<SelectOption[]>([]);
  const [selected, handleChangeSelected] = useInputState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    (async function () {
      const cards = (await repo.getAll()).map(
        (el: CardData) =>
          ({
            id: el.id,
            text: `${el.firstName} ${el.lastName}`,
          } as SelectOption),
      );
      setSelOpts(cards);
    })();
  }, [setSelOpts]);

  useEffect(() => {
    if (!!selected) setIsButtonDisabled(false);
  }, [selected]);

  return (
    <div>
      <VCardGeneratorLogo />
      <div>
        <SelectField
          name="candidato"
          label="Selecione um candidato da lista"
          changeHandler={handleChangeSelected}
          options={selOpts}
          promptMessage="Candidato"
        />
        <Button
          target={"/cards/" + selected}
          text="gerar vCard"
          size="small"
          theme="light"
          isDisabled={isButtonDisabled}
        />
        <BackButton />
      </div>
    </div>
  );
}
