import React, { ReactElement, useEffect, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function NotFound(): ReactElement {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <div>
      <h1>Page not found</h1>
    </div>
  );
}
