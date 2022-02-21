const express = require('express');
const obj = require('../logger/logger');
const helper = require('../util/helper');
const formatter = require('../validator/formatter');
const lodash = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------Problem 1-----------');
    obj.printMessage(`Welcome to my application. I'm Ishvinder Singh and a part of FunctionUp Thorium cohort`);
    console.log('------------Problem 2-----------');
    console.log('printDate: ' ,helper.printDate);
    console.log('printMonth: ' ,helper.printMonth+1);
    helper.printBatchInfo("Thorium, W3D1, the topic for today is Nodejs module system.");
    console.log('------------Problem 3-----------');
    console.log(formatter.nonTrimText); //text with whitespaces 
    console.log(formatter.trimText);    //trim()
    formatter.smallLetters('QWERTYUIOP');
    formatter.blockLetters('node.js');

    res.send('My first ever api!')
    //console.log(obj.endpoint);
});

router.get('/hello', function (req, res){

    const arrayOfMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const chunkResult = lodash.chunk(arrayOfMonths,3);
    console.log(chunkResult);

    const arrayOfOdds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const oddResult = lodash.tail(arrayOfOdds);
    console.log(oddResult);

    const a1 = [12,32,1,23,99];
    const a2 = [99,32,66,7,8,9];
    const a3 = [0,1,2,4,76];
    const a4 = [11,13,33,113];
    const a5 = [76,88,9,0];
    const unionResult = lodash.union(a1,a2,a3,a4,a5);
    console.log(unionResult);

    const arrayOfMovies = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
    const fromPairResult = lodash.fromPairs(arrayOfMovies);
    console.log(fromPairResult);




    res.send('hello handler test');
});






module.exports = router;
// adding this comment for no reason