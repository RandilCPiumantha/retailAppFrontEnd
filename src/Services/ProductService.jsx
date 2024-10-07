import axios from "axios";

const API_URL = "https://localhost:7126/api/Product";

export const createProduct = async (product, disqualificationReason) => {
  const url = disqualificationReason
    ? `${API_URL}?disqualificationReason=${disqualificationReason}`
    : API_URL;

  const response = await axios.post(url, product);
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
