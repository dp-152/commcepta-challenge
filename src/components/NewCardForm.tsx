import React, { ReactElement } from "react";
import { useForm, RegisterOptions } from "react-hook-form";
import { CardData } from "../data/CardData";
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
      required: "Campo obrigatorio",
      maxLength: 30,
      pattern: {
        value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
        message: "O campo contem caracteres inválidos",
      },
    },
    emailField: {
      required: true,
      pattern: {
        value: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
        message: "E-Mail inválido",
      },
    },
    phoneField: {
      required: true,
      pattern: {
        value: /^\([\d]{2}\)\s[0-9]{5}-[0-9]{4}$/,
        message: "Celular inválido",
      },
    },
    addressField: {
      required: true,
      maxLength: 200,
      pattern: {
        value: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,]+$/,
        message: "O campo contem caracteres inválidos",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
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
      {/* TODO: Rework Button component to fit this case as well */}
      <button type="submit">gerar vCard</button>
    </form>
  );
}
