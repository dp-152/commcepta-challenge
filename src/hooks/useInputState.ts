import { ChangeEvent, useState, useCallback } from "react";

export default function useInputState(init: string) {
  const [value, setValue] = useState(init);

  const changeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  }, []);

  return [value, changeHandler] as const;
}
