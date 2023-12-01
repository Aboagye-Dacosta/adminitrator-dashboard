import axios from "axios";

import { BASE_URL } from "./loadData";

const loadAllSuppliers = async () => {
  const response = await axios.get(`${BASE_URL}/serviceprofile`);
  return await response.data;
};

export { loadAllSuppliers };
