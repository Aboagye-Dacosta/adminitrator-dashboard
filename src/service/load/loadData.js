//load all customers
export const BASE_URL = "https://calleva-node-app.onrender.com";

import axios from "axios";

const readAll = async (path) => {
  const response = await axios.get(`${BASE_URL}${path}`);
  return await response.data;
};

export { readAll };
