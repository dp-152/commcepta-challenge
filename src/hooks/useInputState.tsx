import { ChangeEvent, useState } from "react";

export default function useInputState(init: string) {
  const [value, setValue] = useState(init);

  function changeHandler(event: ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }

  return [value, changeHandler] as const;
}
