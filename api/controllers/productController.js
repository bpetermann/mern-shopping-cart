const asyncHandler = require('express-async-handler');

const Product = require('../models/productModel');

exports.getProducts = (req, res) => {
  res.send('All Products Route');
};

exports.getProduct = (req, res) => {
  res.send('Get Product Route');
};

exports.createProduct = asyncHandler(async (req, res) => {
  const { name, description, price } = req.body;

  const product = await Product.create({
    name,
    description,
    price,
  });

  if (product) {
    res.status(201).json({
      _id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      amount: product.amount,
    });
  } else {
    res.status(400);
    throw new Error('Inavlid user data');
  }
});
