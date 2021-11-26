interface CommcepterDataDTOBase {
  "first_name": string;
  "last_name": string;
  "cellphone": string;
  "email": string;
  "company": string;
  "title": string;
  "street": string;
  "city": string;
  "state": string;
}

export interface CommcepterDataInboundDTO extends CommcepterDataDTOBase {
  id: number;
}

export interface CommcepterDataOutboundDTO extends CommcepterDataDTOBase {
  color: string;
}
