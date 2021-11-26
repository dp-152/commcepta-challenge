import { CardData } from "../data/CardData";

interface ICommceptersRepository {
  getAll: () => Promise<CardData[]>;
  getByID: (id: number) => Promise<CardData | false>;
  getQRCode: (id: number) => Promise<string>;
  makeQRCode: (data: CardData) => Promise<string>;
}

export default ICommceptersRepository;
