const mongoose = require('mongoose');

const newsletterSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please add an username'],
      unique: true,
    },
    interests: {
      type: Object,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Newsletter', newsletterSchema);
