const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add an name'],
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Please add an Id'],
      unique: false,
    },
    price: {
      type: Number,
      required: [true, 'Please add a Price'],
      unique: false,
    },
    amount: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
