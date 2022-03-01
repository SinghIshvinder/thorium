const { query } = require('express');
const userModel = require('../models/bookModel')
const createBook = async function(req, res){
    let data = req.body;
    let savedData = await userModel.create(data);
 
    res.send({msg: savedData});
 
}

const bookList = async function(req, res){
    let allBooks = await userModel.find().select({bookName:1, tags:{authorName:1}});
    res.send({msg: allBooks});
 
}

const getBooksInYear = async function(req, res){
    let allBooks = await userModel.find({year:"2021"});
    res.send({msg: allBooks});
}

const getXINRBooks = async function(req, res){
    let allBooks = await userModel.find({"price.inrPrice":{$in:[100,200,500]}});
    res.send({msg: allBooks});
}

const getRandomBooks = async function(req, res){
    let allBooks = await userModel.find({$or: [{"tags.totalPages":{$gt:500}},{"tags.stockAvailable":true}]})
    res.send({msg: allBooks});

}
const getParticularBooks = async function(req,res){
    let booksInYear = await userModel.find({year: req.body});
    res.send({msg : ParticularBooks});
}

module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getParticularBooks = getParticularBooks;