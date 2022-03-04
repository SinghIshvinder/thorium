const { query } = require("express");
const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");
const publisherModel = require("../models/publisherModel");

const createAuthor = async function (req, res) {
  let data = req.body;
  let savedAuthors = await authorModel.create(data);
  res.send({ msg: savedAuthors });
};

const createPublisher = async function (req, res) {
  let data = req.body;
  let savedPublishers = await publisherModel.create(data);
  res.send({ msg: savedPublishers });
};

const createBook = async function (req, res) {
  let book = req.body;
  let authorId = book.author;
  let publisherId = book.publisher;

  if (!authorId) return res.send("Error! Author details are required.");

  let author = await authorModel.findById(authorId);
  if (!author)
    return res.send("Invalid Request! No Author Found With Given Id.");

  if (!publisherId) return res.send("Error! Publisher details are required.");

  let publisher = await publisherModel.findById(publisherId);
  if (!publisher)
    return res.send("Invalid Request! No Publisher Found With Given Id");

  let bookCreated = await bookModel.create(book);
  return res.send({ data: bookCreated });
};

const getBooks = async function (req, res) {
  let books = await bookModel.find().populate("author publisher");
  res.send({ data: books });
};

const putBooks = async function (req, res) {
  let hardCoverPublishers = await publisherModel.find({
    name: { $in: ["Penguin Pulishings", "Harper Collins Publishers"] },
  });
  let pId = hardCoverPublishers.map((p) => p._id);
  await bookModel.updateMany(
    { publisher: { $in: pId } },
    { isHardCover: true }
  );
  let newList = await bookModel
    .find()
    .select({ name: 1, publisher: 1, isHardCover: 1 });
  res.send({ msg: newList });
};
const increasePrice = async function (req, res) {
  const data = await bookModel.updateMany(
    { ratings: { $gt: 3.5 } },
    { $inc: { price: +10 } }
  );
  res.send({ msg: "Price Change Successful. Check DB for updated prices." });
};

module.exports.createAuthor = createAuthor;
module.exports.createPublisher = createPublisher;
module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
module.exports.putBooks = putBooks;
module.exports.increasePrice = increasePrice;
