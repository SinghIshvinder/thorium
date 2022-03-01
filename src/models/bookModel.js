const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const bookSchema = new mongoose.Schema({
  bookName: {type:String, required:true},
  year: {type: String, default:"2021"},
  price:{inrPrice: String, eurPrice: String},
  tags:[{authorName: String, totalPages: Number, stockAvailable:Boolean}]
  
},{ timestamps:true });

module.exports = mongoose.model('Books', bookSchema);