const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

router
  .route('/')
  .get(productController.getProducts)
  .post(protect, productController.createProduct);

router.route('/:productId').get(productController.getProduct);

module.exports = router;
