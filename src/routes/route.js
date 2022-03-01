const express = require('express');
const router = express.Router();
const userModel = require('../models/bookModel');
const userController = require('../controllers/controller')

router.post('/createBook', userController.createBook);

router.get('/bookList', userController.bookList );

router.get('/getBooksInYear', userController.getBooksInYear);

router.get('/getXINRBooks', userController.getXINRBooks);

router.get('/getRandomBooks', userController.getRandomBooks);

router.post('/getParticularBooks', userController.getParticularBooks);



module.exports = router;