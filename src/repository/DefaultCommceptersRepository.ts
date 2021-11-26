import {
  CommcepterDataInboundDTO,
  CommcepterDataOutboundDTO,
} from "../data/CommcepterDataDTOs";
import ICommceptersRepository from "./ICommceptersRepository";
import axios from "axios";

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
    return res.data as CommcepterDataInboundDTO[];
  },

  async getByID(id: number) {
    let res;
    try {
      res = await axios.get(apiUrl + "/commcepter/" + id);
    } catch (err) {
      console.error(err);
      return false;
    }
    return res.data as CommcepterDataInboundDTO;
  },

  async getQRCode(id: number) {
    let res;
    try {
      res = await axios.get(apiUrl + "/vcard/qrcode/commcepter/" + id);
    } catch (err) {
      console.error(err);
      return "";
    }

    return btoa(res.data);
  },

  async makeQRCode(data: CommcepterDataOutboundDTO) {
    let res;
    try {
      res = await axios.post(apiUrl + "/vcard/qrcode/new");
    } catch (err) {
      console.error(err);
      return "";
    }

    return btoa(res.data);
  },
};

export default repo;
