import React, {
  ReactElement,
  useCallback,
  useState,
  useEffect,
  useContext,
} from "react";

import BackButton from "../../components/BackButton";
import CardContainer from "../../components/CardContainer";
import NewCardForm from "../../components/NewCardForm";
import VCardGeneratorLogo from "../../components/VCardGeneratorLogo";
import ThemeContext from "../../contexts/ThemeContext";
import { CardData } from "../../data/CardData";
import repo from "../../repository/DefaultCommceptersRepository";

export default function NewCard(): ReactElement {
  const { theme, setTheme } = useContext(ThemeContext);
  const [userData, setUserData] = useState({} as CardData);
  const [qrCode, setQrCode] = useState("");
  const [shouldRenderCard, setShouldRenderCard] = useState(false);

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  const submitHandler = useCallback((data: CardData) => {
    data.company = "Commcepta";
    setUserData(data);
    setShouldRenderCard(true);

    repo.makeQRCode(data).then(img => {
      setQrCode(img);
    });
  }, []);

  return shouldRenderCard ? (
    <section className={`CardPage-wrapper theme-${theme}`}>
      <CardContainer
        firstName={userData.firstName}
        lastName={userData.lastName}
        position={userData.position}
        b64QrCode={qrCode}
      />
    </section>
  ) : (
    <div>
      <VCardGeneratorLogo />
      <BackButton />
      <NewCardForm submitHandler={submitHandler} />
    </div>
  );
}
