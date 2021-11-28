import React, { ReactElement } from "react";
import { useForm, RegisterOptions } from "react-hook-form";

import "../css/components/NewCardForm.css";

import { CardData } from "../data/CardData";
import Button from "./Button";
import InputField from "./InputField";

interface Props {
  submitHandler: (data: CardData) => void;
}

export default function NewCardForm({ submitHandler }: Props): ReactElement {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const opts: { [index: string]: RegisterOptions } = {
    textField: {
      required: "Campo obrigatório",
      maxLength: 30,
      pattern: {
        value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
        message: "O campo contém caracteres inválidos",
      },
    },
    emailField: {
      required: "Campo obrigatório",
      pattern: {
        value: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
        message: "E-Mail inválido",
      },
    },
    phoneField: {
      required: "Campo obrigatório",
      pattern: {
        value: /^\([\d]{2}\)\s[0-9]{5}-[0-9]{4}$/,
        message: "Celular inválido",
      },
    },
    addressField: {
      required: "Campo obrigatório",
      maxLength: 200,
      pattern: {
        value: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,]+$/,
        message: "O campo contém caracteres inválidos",
      },
    },
  };

  return (
    <form className="NewCardForm" onSubmit={handleSubmit(submitHandler)}>
      <div className="NewCardForm-divide-middle">
        <InputField
          type="text"
          registrator={register}
          fieldName="firstName"
          fieldLabel="Nome"
          errors={errors}
          opts={opts.textField}
        />

        <InputField
          type="text"
          registrator={register}
          fieldName="lastName"
          fieldLabel="Sobrenome"
          errors={errors}
          opts={opts.textField}
        />
      </div>
      <div className="NewCardForm-divide-thirds">
        <InputField
          control={control}
          fieldName="phone"
          fieldLabel="Celular"
          format="(##) #####-####"
          errors={errors}
          opts={opts.phoneField}
        />

        <InputField
          type="email"
          registrator={register}
          fieldName="email"
          fieldLabel="E-mail"
          errors={errors}
          opts={opts.emailField}
        />
      </div>

      <div className="NewCardForm-divide-middle">
        <InputField
          type="text"
          registrator={register}
          fieldName="position"
          fieldLabel="Cargo"
          errors={errors}
          opts={opts.textField}
        />

        <InputField
          type="text"
          registrator={register}
          fieldName="state"
          fieldLabel="Estado"
          errors={errors}
          opts={opts.textField}
        />
      </div>

      <div className="NewCardForm-divide-fourths">
        <InputField
          type="text"
          registrator={register}
          fieldName="city"
          fieldLabel="Cidade"
          errors={errors}
          opts={opts.textField}
        />

        <InputField
          type="text"
          registrator={register}
          fieldName="address"
          fieldLabel="Rua"
          errors={errors}
          opts={opts.addressField}
        />
      </div>
      <div className="NewCardForm-submit">
        <Button text="gerar vCard" size="small" target="$form-submit" />
      </div>
    </form>
  );
}
