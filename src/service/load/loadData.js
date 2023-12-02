//load all customers
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;
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
