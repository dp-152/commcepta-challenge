import { useState, useCallback } from "react";

export default function useToggle(init: boolean) {
  const [value, setValue] = useState(init);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle] as const;
}
