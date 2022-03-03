const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    author: {
      type: ObjectId,
      ref: "Author",
    },
    price: Number,
    ratings: Number,
    publisher: {
      type: ObjectId,
      ref: "Publisher",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);
