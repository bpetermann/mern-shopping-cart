const asyncHandler = require('express-async-handler');

const Product = require('../models/productModel');
const Rating = require('../models/ratingModel');

exports.getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

exports.getProduct = asyncHandler(async (req, res) => {
  productId = req.params.productId;
  if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(400);
    throw new Error('No product found');
  }

  const product = await Product.findById(productId);

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

exports.rateProduct = asyncHandler(async (req, res) => {
  id = req.params.productId;
  const { rating } = req.body;
  const user = {
    email: req.user.email,
  };

  if (!user) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  const userRatingExists = await Rating.findOne({
    email: user.email,
    id: id,
  });

  if (userRatingExists) {
    res.status(400);
    throw new Error('Product was already rated!');
  }

  const newRating = await Rating.create({
    user: user.email,
    id,
    rating,
  });

  if (newRating) {
    res.status(201).json({
      _id: newRating._id,
      email: newRating.email,
      id: newRating.id,
      rating: newRating.rating,
    });
  } else {
    res.status(400);
    throw new Error("Could'nt rate product");
  }
});

exports.getRatings = asyncHandler(async (req, res) => {
  const productId = req.params.productId;
  const ratings = await Rating.find({});

  const selectedRatings = ratings.filter((rating) => rating.id === productId);

  const userRatings = selectedRatings.length;

  const averageRating =
    selectedRatings.reduce((sum, { rating }) => sum + rating, 0) / userRatings;

  // const userRating = {
  //   average: Math.ceil(averageRating),
  //   userRatings: userRatings,
  // };

  res.status(200).json({
    average: Math.ceil(averageRating),
    userRatings: userRatings,
  });
});
