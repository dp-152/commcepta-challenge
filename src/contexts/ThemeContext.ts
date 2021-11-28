import { createContext } from "react";

export type LightOrDark = "light" | "dark";

export interface Theme {
  theme: LightOrDark;
  setTheme: (theme: LightOrDark) => void;
}

export default createContext<Theme>({
  theme: "light",
  setTheme(theme) {},
});
