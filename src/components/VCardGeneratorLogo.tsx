import React, { ReactElement } from "react";

import "../css/components/VCardGeneratorLogo.css";

export default function VCardGeneratorLogo(): ReactElement {
  return (
    <div className="VCardGeneratorLogo">
      <span className="VCardGeneratorLogo-topText">vCard</span>
      <span className="VCardGeneratorLogo-bottomText">generator</span>
    </div>
  );
}
