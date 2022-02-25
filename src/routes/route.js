const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const userController = require('../controllers/controller')


// let persons = [
//     {
//     name: "PK",
//     age: 10,
//     votingStatus: false
//  },
//  {
//     name: "SK",
//     age: 20,
//     votingStatus: false
//  },
//  {
//     name: "AA",
//     age: 70,
//     votingStatus: false
//  },
//  {
//     name: "SC",
//     age: 5,
//     votingStatus: false
//  },
//  {
//     name: "HO",
//     age: 40,
//     votingStatus: false
//  }
//  ]
 
// router.post("/voting", function (req, res) {
    
//     let votingAge = req.query.votingAge;
//     let finalArr= persons.filter( person => person.age >votingAge);
//     for(let i=0; i<finalArr.length; i++){
//         finalArr[i].votingStatus = true;
//     }
    

//     console.log(finalArr);
//     res.send({ result: finalArr , status: true })
// })

router.post('/createBook', userController.createBook);

router.get('/getBook', userController.getBook );




module.exports = router;