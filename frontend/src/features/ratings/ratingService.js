import axios from 'axios';

const API_URL = '/api/products/rate';

const getRatings = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`);
  return response.data;
};

const rateProduct = async (ratingData) => {
  const response = await axios.post(
    `${API_URL}/${ratingData.productId}`,
    ratingData
  );
  return response.data;
};

const ratingService = {
  getRatings,
  rateProduct,
};

export default ratingService;
