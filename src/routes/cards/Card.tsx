import React, { ReactElement, useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router";

import "../../css/routes/cards/Card.css";

import CardContainer from "../../components/CardContainer";
import ThemeContext from "../../contexts/ThemeContext";
import { CardData } from "../../data/CardData";
import repo from "../../repository/DefaultCommceptersRepository";
import BackButton from "../../components/BackButton";
import LocalCardDataContext from "../../contexts/LocalCardDataContext";

export default function Card(): ReactElement {
  const { theme, setTheme } = useContext(ThemeContext);
  const { localData, setLocalData } = useContext(LocalCardDataContext);
  const [cardData, setCardData] = useState({} as CardData);
  const [qrCode, setQrCode] = useState("");
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  useEffect(() => {
    // TODO: loading animation while waiting for response
    (async function () {
      if (localData !== null && params?.id && params.id === "-1") {
        setCardData(localData);
        setLocalData(null);
      } else if (params?.id && params.id !== "-1") {
        const repoData = await repo.getByID(+params.id);
        if (!repoData) {
          console.warn("No user found with this id.");
          nav("/not-found");
          return;
        }

        setCardData(repoData);
      }
    })();
  }, [localData, setLocalData, params, nav]);

  useEffect(() => {
    (async function () {
      let img = await repo.getQRCode(+params!.id!);
      if (!img) {
        img = await repo.makeQRCode(cardData);
      }

      setQrCode(img);
    })();
  }, [params, cardData, setQrCode]);

  return (
    <section className={`CardPage-wrapper theme-${theme}`}>
      <div className="CardPage-backbutton-container">
        <BackButton />
      </div>
      <CardContainer
        firstName={cardData.firstName}
        lastName={cardData.lastName}
        position={cardData.position}
        b64QrCode={qrCode}
      />
    </section>
  );
}
