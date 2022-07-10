const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const Newsletter = require('../models/newsletterModel');

exports.registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Validate email
  if (!email || !email.includes('@')) {
    res.status(422);
    throw new Error('Please enter a valid email');
  }

  //Validate password
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!password || password.trim().length < 6 || !format.test(password)) {
    res.status(422);
    throw new Error('Please enter a valid password');
  }

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error('Email address is already in use');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Inavlid user data');
  }
});

exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

exports.newsletterSubscription = asyncHandler(async (req, res) => {
  const { email, interests } = req.body;

  //Validate email
  if (!email || !email.includes('@')) {
    res.status(422);
    throw new Error('Please enter a valid email');
  }

  const subscriptionExists = await Newsletter.findOne({ email: email });

  if (subscriptionExists) {
    res.status(400);
    throw new Error('Already subscribed to the newsletter');
  }

  const newsletter = await Newsletter.create({
    email,
    interests,
  });

  if (newsletter) {
    res.status(201).json({
      message: 'Subscription successful',
    });
  } else {
    res.status(400);
    throw new Error("Couldn't subscribe to newsletter");
  }
});

// Generate token for user

const generateToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
