import axios from 'axios';

const API_URL = '/api/products';

const getProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getProduct = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`);

  return response.data;
};

const productService = {
  getProducts,
  getProduct,
};

export default productService;
