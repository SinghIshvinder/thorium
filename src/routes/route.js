const express = require("express");
const router = express.Router();
const bookModel = require("../models/bookModel");
const bookController = require("../controllers/controller");
const publisherSchema = require("../models/publisherModel");

router.post("/createAuthor", bookController.createAuthor);

router.post("/createPublisher", bookController.createPublisher);

router.post("/createBook", bookController.createBook);

router.get("/getBooks", bookController.getBooks);

module.exports = router;
