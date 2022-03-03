const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const authorSchema = new mongoose.Schema(
  {
   authorName: { type: String, required: true },
    age: Number,
    address: String,
    ratings: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", authorSchema);
