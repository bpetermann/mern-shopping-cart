const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Product Route');
});

router.get('/products', (req, res) => {
  res.send('All Products');
});

module.exports = router;
