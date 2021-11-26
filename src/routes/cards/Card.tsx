import React, { ReactElement, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import BackButton from "../../components/BackButton";

import CardContainer from "../../components/CardContainer";
import { CardData } from "../../data/CardData";
import repo from "../../repository/DefaultCommceptersRepository";


export default function Card(): ReactElement {
  const [userData, setUserData] = useState({} as CardData);
  const [qrCode, setQrCode] = useState("");
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
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
