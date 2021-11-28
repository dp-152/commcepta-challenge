import React, { ChangeEvent, ReactElement, useContext } from "react";

import "../css/components/SelectField.css";
import ThemeContext from "../contexts/ThemeContext";

export interface Option {
  id: number;
  text: string;
}

interface Props {
  name: string;
  label: string;
  changeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  promptMessage?: string;
}

export default function SelectField({
  name,
  label,
  changeHandler,
  options,
  promptMessage,
}: Props): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="SelectField-wrapper">
      <label htmlFor={name} className={`SelectField-label theme-${theme}`}>
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        onChange={changeHandler}
        className={`SelectField theme-${theme}`}
      >
        <option hidden disabled value="">
          {promptMessage || ""}
        </option>
        {options.map(el => (
          <option key={`${el.id}_${el.text}`} value={el.id}>
            {el.text}
          </option>
        ))}
      </select>
    </div>
  );
}
