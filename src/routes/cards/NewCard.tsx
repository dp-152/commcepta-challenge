import React, { ReactElement, useCallback, useState } from "react";

import BackButton from "../../components/BackButton";
import CardContainer from "../../components/CardContainer";
import NewCardForm from "../../components/NewCardForm";
import VCardGeneratorIcon from "../../components/VCardGeneratorIcon";
import { CardData } from "../../data/CardData";
import repo from "../../repository/DefaultCommceptersRepository";

export default function NewCard(): ReactElement {
  const [userData, setUserData] = useState({} as CardData);
  const [qrCode, setQrCode] = useState("");
  const [shouldRenderCard, setShouldRenderCard] = useState(false);

  const submitHandler = useCallback((data: CardData) => {
    data.company = "Commcepta";
    setUserData(data);
    setShouldRenderCard(true);

    repo.makeQRCode(data).then(img => {
      setQrCode(img);
    });
  }, []);

  return shouldRenderCard ? (
    <div>
      <BackButton />
      <CardContainer
        firstName={userData.firstName}
        lastName={userData.lastName}
        position={userData.position}
        b64QrCode={qrCode}
      />
    </div>
  ) : (
    <div>
      <VCardGeneratorIcon />
      <BackButton />
      <NewCardForm submitHandler={submitHandler} />
    </div>
  );
}
