const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/Assignments' , 
{useNewUrlParser: true, useUnifiedTopology:true}).then(() => console.log("connection successful"))
.catch((err) => console.log('eror', err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
