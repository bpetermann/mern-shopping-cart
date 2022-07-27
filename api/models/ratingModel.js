const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: false,
  },
  id: {
    type: String,
    required: [true, 'Please add an id'],
    unique: false,
  },
  rating: {
    type: Number,
    required: [true, 'Please add a rating'],
    unique: false,
  },
});

module.exports = mongoose.model('Rating', ratingSchema);
