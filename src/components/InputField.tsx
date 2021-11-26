import React, { ReactElement } from "react";
import NumberFormat, { FormatInputValueFunction } from "react-number-format";
import {
  Controller,
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  Control,
} from "react-hook-form";

import "../css/components/InputField.css";
import { RequireEither } from "../util/types";

interface Props {
  type?: React.HTMLInputTypeAttribute;
  registrator?: UseFormRegister<FieldValues>;
  control?: Control<FieldValues, object>;
  fieldName: string;
  fieldLabel: string;
  format?: string | FormatInputValueFunction;
  opts: RegisterOptions;
  errors: { [index: string]: any };
}

export default function InputField({
  type,
  registrator,
  control,
  fieldName,
  fieldLabel,
  format,
  opts,
  errors,
}: RequireEither<Props, "registrator" | "control">): ReactElement {
  const error = errors[fieldName];

  // Null check to make TypeScript happy
  const registration = registrator && registrator(fieldName, opts);
  return (
    <span className={"InputField " + (error ? "InputField-error" : "")}>
      <label htmlFor={fieldName}>{fieldLabel}</label>
      {format ? (
        <Controller
          render={({ field }) => (
            <NumberFormat {...field} format={format} mask="_" />
          )}
          name={fieldName}
          rules={opts}
          control={control}
        />
      ) : (
        <input {...registration} />
      )}
      {error && <span className="InputField-errormsg">{error.message}</span>}
    </span>
  );
}
