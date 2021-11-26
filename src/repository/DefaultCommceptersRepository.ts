import {
  CommcepterDataInboundDTO,
  CommcepterDataOutboundDTO,
} from "../data/CommcepterDataDTOs";
import ICommceptersRepository from "./ICommceptersRepository";
import axios from "axios";
import { map } from "../util/mapper";
import { inboundToInternal, internalToOutbound } from "../data/mappings";
import { CardData } from "../data/CardData";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

const repo: ICommceptersRepository = {
  async getAll() {
    let res;
    try {
      res = await axios.get(apiUrl + "/commcepters");
    } catch (err: any) {
      console.error(err);
      return [];
    }
    return res.data.map((e: CommcepterDataInboundDTO) =>
      map(e, inboundToInternal),
    ) as CardData[];
  },

  async getByID(id: number) {
    let res;
    try {
      res = await axios.get(apiUrl + "/commcepter/" + id);
    } catch (err) {
      console.error(err);
      return false;
    }
    return map(res.data, inboundToInternal) as CardData;
  },

  async getQRCode(id: number) {
    let res;
    try {
      res = await axios.get(apiUrl + "/vcard/qrcode/commcepter/" + id, {
        responseType: "arraybuffer",
      });
    } catch (err) {
      console.error(err);
      return "";
    }

    return Buffer.from(res.data).toString("base64");
  },

  async makeQRCode(data: CardData) {
    const mapped = map(data, internalToOutbound) as CommcepterDataOutboundDTO;

    let res;
    try {
      res = await axios.post(apiUrl + "/vcard/qrcode/new", mapped, {
        responseType: "arraybuffer",
      });
    } catch (err) {
      console.error(err);
      return "";
    }

    return Buffer.from(res.data).toString("base64");
  },
};

export default repo;
