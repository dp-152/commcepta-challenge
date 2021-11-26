import { CardData } from "../data/CardData";
import { CommcepterDataOutboundDTO } from "../data/CommcepterDataDTOs";

interface ICommceptersRepository {
  getAll: () => Promise<CardData[]>;
  getByID: (id: number) => Promise<CardData | false>;
  getQRCode: (id: number) => Promise<string>;
  makeQRCode: (data: CommcepterDataOutboundDTO) => Promise<string>;
}

export default ICommceptersRepository;
