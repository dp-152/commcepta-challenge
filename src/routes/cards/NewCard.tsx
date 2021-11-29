import React, { ReactElement, useCallback, useEffect, useContext } from "react";

import "../../css/routes/cards/NewCard.css";

import NewCardForm from "../../components/NewCardForm";
import VCardGeneratorLogo from "../../components/VCardGeneratorLogo";
import ThemeContext from "../../contexts/ThemeContext";
import { CardData } from "../../data/CardData";
import BackButton from "../../components/BackButton";
import LocalCardDataContext from "../../contexts/LocalCardDataContext";
import { useNavigate } from "react-router";

export default function NewCard(): ReactElement {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setLocalData } = useContext(LocalCardDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  const submitHandler = useCallback(
    (data: CardData) => {
      data.company = "Commcepta";
      setLocalData(data);
      navigate("/cards/-1");
    },
    [navigate, setLocalData],
  );

  return (
    <section className={`NewCardPage-wrapper theme-${theme}`}>
      <div className="NewCardPage-grid-left">
        <VCardGeneratorLogo />
        <div className="NewCardPage-backbutton">
          <BackButton />
        </div>
      </div>
      <NewCardForm submitHandler={submitHandler} />
    </section>
  );
}
