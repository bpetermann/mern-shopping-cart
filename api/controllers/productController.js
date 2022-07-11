const asyncHandler = require('express-async-handler');

const Product = require('../models/productModel');

exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

exports.getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.productId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(400);
    throw new Error('No product found');
  }
});

exports.createProduct = asyncHandler(async (req, res) => {
  const { name, description, price } = req.body;
  const user = {
    id: req.user._id,
    isAdmin: req.user.isAdmin,
  };

  if (!user || !user.isAdmin) {
    res.status(401);
    throw new Error('Not Authorized');
  }

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
