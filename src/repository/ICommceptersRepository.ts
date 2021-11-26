import {
  CommcepterDataInboundDTO,
  CommcepterDataOutboundDTO,
} from "../data/CommcepterDataDTOs";

interface ICommceptersRepository {
  getAll: () => Promise<CommcepterDataInboundDTO[]>;
  getByID: (id: number) => Promise<CommcepterDataInboundDTO | false>;
  getQRCode: (id: number) => Promise<string>;
  makeQRCode: (data: CommcepterDataOutboundDTO) => Promise<string>;
}

export default ICommceptersRepository;
