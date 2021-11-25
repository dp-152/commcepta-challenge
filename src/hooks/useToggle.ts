import { useState } from "react";

export default function useToggle(init: boolean) {
  const [value, setValue] = useState(init);

  function toggle() {
    setValue(!value);
  }

  return [value, toggle] as const;
}
