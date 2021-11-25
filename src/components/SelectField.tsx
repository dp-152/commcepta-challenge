import React, { ChangeEvent, ReactElement } from "react";

export interface Option {
  id: number;
  text: string;
}

interface Props {
  name: string;
  label: string;
  changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

export default function SelectField({
  name,
  label,
  changeHandler,
  options,
}: Props): ReactElement {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} onChange={changeHandler}>
        {options.map(el => (
          <option key={`${el.id}_${el.text}`} value={el.id}>
            {el.text}
          </option>
        ))}
      </select>
    </div>
  );
}
