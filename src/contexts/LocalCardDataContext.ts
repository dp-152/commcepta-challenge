import { createContext } from "react";
import { CardData } from "../data/CardData";

export interface LocalCardData {
  localData: CardData | null;
  setLocalData: (data: CardData | null) => void;
}

export default createContext<LocalCardData>({} as LocalCardData);
