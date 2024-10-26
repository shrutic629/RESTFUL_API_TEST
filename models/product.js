const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productname: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Product", productSchema);
