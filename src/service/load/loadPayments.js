//load all customers
export const BASE_URL = "https://calleva-node-app.onrender.com";

import axios from "axios";

const loadAllCustomers = async () => {
  const response = await axios.get(`${BASE_URL}/customerprofile`);
  return await response.data;
};

export { loadAllCustomers };
