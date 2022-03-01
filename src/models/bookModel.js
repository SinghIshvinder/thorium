const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const bookSchema = new mongoose.Schema(
  {
    bookName: { type: String, required: true },
    authorId: { type: Number, required: true },
    price: Number,
    ratings: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);
