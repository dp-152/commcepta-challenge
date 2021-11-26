export interface CardData {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  position: string;
  address: string;
  city: string;
  state: string;
}

export const emptyCardData: Readonly<CardData> = Object.freeze({
  id: 0,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  company: "",
  position: "",
  address: "",
  city: "",
  state: "",
});
