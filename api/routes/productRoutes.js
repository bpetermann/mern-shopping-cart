const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router
  .route('/')
  .get(productController.getProducts)
  .post(productController.createProduct);

router.get('/:productId', productController.getProduct);

module.exports = router;
