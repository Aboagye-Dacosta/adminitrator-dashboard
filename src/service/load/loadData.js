//load all customers
export const BASE_URL = "https://calleva-node-app.onrender.com";

import axios from "axios";

const readAll = async (path) => {
  try {
    const response = await axios.get(`${BASE_URL}${path}`);
    if (response.status == 200) {
      const data = await response.data;
      return {
        data: data.data,
        error: false,
        message: "data loaded successfully",
      };
    }
    return {
      error: true,
      message: "sorry something happened",
      data: [],
    };
  } catch (error) {
    return {
      error: true,
      message: "Please check your network",
      data: [],
    };
  }
};

export { readAll };
