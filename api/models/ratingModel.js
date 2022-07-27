const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
  },
  id: {
    type: String,
    required: [true, 'Please add an id'],
  },
  rating: {
    type: Number,
    required: [true, 'Please add a rating'],
  },
});

module.exports = mongoose.model('Rating', ratingSchema);
