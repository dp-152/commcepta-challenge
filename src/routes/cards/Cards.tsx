import React, { ReactElement, useState, useEffect } from "react";

import useInputState from "../../hooks/useInputState";

import Button from "../../components/Button";
import SelectField, {
  Option as SelectOption,
} from "../../components/SelectField";
import VCardGeneratorIcon from "../../components/VCardGeneratorIcon";
import BackButton from "../../components/BackButton";

export default function Cards(): ReactElement {
  const [selOpts, setSelOpts] = useState<SelectOption[]>([]);
  const [selected, handleChangeSelected] = useInputState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // TODO: replace with API call
    setSelOpts([
      {
        id: 1,
        text: "UserOne",
      },
      {
        id: 2,
        text: "UserTwo",
      },
      {
        id: 3,
        text: "UserThree",
      },
    ]);
  }, []);

  useEffect(() => {
    if (!!selected) setIsButtonDisabled(false);
  }, [selected]);

  return (
    <div>
      <VCardGeneratorIcon />
      <div>
        <SelectField
          name="candidato"
          label="Selecione um candidato da lista"
          changeHandler={handleChangeSelected}
          options={selOpts}
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
