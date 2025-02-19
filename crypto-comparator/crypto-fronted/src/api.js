import axios from "axios";

const API_URL = "http://127.0.0.1:8000";  // Backend

export const fetchCryptoPrice = async (crypto) => {
  try {
    const response = await axios.get(`${API_URL}/price/${crypto}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching price:", error);
    return null;
  }
};
