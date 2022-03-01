const express = require("express");
const router = express.Router();
const bookModel = require("../models/bookModel");
const bookController = require("../controllers/controller");

router.post("/createBook", bookController.createBook);

router.post("/createAuthor", bookController.createAuthor);

router.get("/getAllBooks", bookController.getAllBooks);

router.get("/updatePrice", bookController.updatePrice);

router.get("/priceRange", bookController.priceRange);

module.exports = router;
