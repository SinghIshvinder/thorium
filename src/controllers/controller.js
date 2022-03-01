const { query } = require("express");
const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");
const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await bookModel.create(data);
  res.send({ msg: savedData });
};

const createAuthor = async function (req, res) {
  let data = req.body;
  let savedAuthors = await authorModel.create(data);
  res.send({ msg: savedAuthors });
};

const getAllBooks = async function (req, res) {
  const authorDetails = await authorModel.find({ authorName: "Chetan Bhagat" });
  const id = authorDetails[0].authorId;
  const booksName = await bookModel
    .find({ authorId: id })
    .select({ bookName: 1 });
  res.send({ msg: booksName });
};

const updatePrice = async function (req, res) {
  const bookDetails = await bookModel.find({ bookName: "Two States" });
  const id = bookDetails[0].authorId;
  const authorN = await authorModel
    .find({ authorId: id })
    .select({ authorName: 1, _id: 0 });
  const bkName = bookDetails[0].bookName;
  const updatedPrice = await bookModel
    .findOneAndUpdate({ bookName: bkName }, { price: 100 }, { new: true })
    .select({ price: 1, _id: 0 });
  res.send({ msg: authorN, updatedPrice });
};

const priceRange = async function (req, res) {
  const booksId = await bookModel
    .find({ price: { $gte: 50, $lte: 100 } })
    .select({ authorId: 1, _id: 0 });
  const id = booksId.map((inp) => inp.authorId);
  let temp = [];
  for (let i = 0; i < id.length; i++) {
    let x = id[i];
    const author = await authorModel
      .find({ authorId: x })
      .select({ authorName: 1, _id: 0 });
    temp.push(author);
  }
  const author_name = temp.flat();
  res.send({ msg: author_name });
};

module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.getAllBooks = getAllBooks;
module.exports.updatePrice = updatePrice;
module.exports.priceRange = priceRange;
