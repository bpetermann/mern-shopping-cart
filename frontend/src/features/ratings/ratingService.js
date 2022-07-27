import axios from 'axios';

const API_URL = '/api/products/rate';

const getRatings = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`);
  console.log(`${API_URL}/${productId}`)
  return response.data;
};

const ratingService = {
  getRatings,
};

export default ratingService;
