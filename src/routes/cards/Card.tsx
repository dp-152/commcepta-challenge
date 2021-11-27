import React, { ReactElement, useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import BackButton from "../../components/BackButton";

import CardContainer from "../../components/CardContainer";
import ThemeContext from "../../contexts/ThemeContext";
import { CardData } from "../../data/CardData";
import repo from "../../repository/DefaultCommceptersRepository";

export default function Card(): ReactElement {
  const { setTheme } = useContext(ThemeContext);
  const [userData, setUserData] = useState({} as CardData);
  const [qrCode, setQrCode] = useState("");
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  useEffect(() => {
    // TODO: loading animation while waiting for response
    (async function () {
      const repoData = await repo.getByID(+params!.id!);
      if (!repoData) {
        console.warn("No user found with this id.");
        nav("/not-found");
        return;
      }

      setUserData(repoData);
    })();
  }, [params, nav]);

  useEffect(() => {
    (async function () {
      let img = await repo.getQRCode(+params!.id!);
      if (!img) {
        img = await repo.makeQRCode(userData);
      }

      setQrCode(img);
    })();
  }, [params, userData, setQrCode]);

  return (
    <div>
      <BackButton />
      <CardContainer
        firstName={userData.firstName}
        lastName={userData.lastName}
        position={userData.position}
        b64QrCode={qrCode}
      />
    </div>
  );
}
