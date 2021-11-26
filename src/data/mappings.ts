const inboundToInternal: [string, string][] = [
  ["id", "id"],
  ["first_name", "firstName"],
  ["last_name", "lastName"],
  ["cellphone", "phone"],
  ["email", "email"],
  ["company", "company"],
  ["title", "position"],
  ["street", "address"],
  ["city", "city"],
  ["state", "state"],
];

const internalToOutbound: [string, string][] = [
  ["firstName", "first_name"],
  ["lastName", "last_name"],
  ["phone", "cellphone"],
  ["email", "email"],
  ["company", "company"],
  ["position", "title"],
  ["address", "street"],
  ["city", "city"],
  ["state", "state"],
];

export { internalToOutbound, inboundToInternal };
