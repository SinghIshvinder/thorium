const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const userController = require('../controllers/controller')

router.post('/createBook', userController.createBook);

router.get('/getBook', userController.getBook );




module.exports = router;