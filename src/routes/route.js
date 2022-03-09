const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tokenAuth = require('../middlewares/auth');


router.post("/users", userController.createUser);

router.post("/login", userController.loginUser);

router.get("/users/:userId", tokenAuth.tokenAuth, tokenAuth.userAuth,userController.getUserData);

router.put("/users/:userId", tokenAuth.tokenAuth, tokenAuth.userAuth ,userController.updateUser);

router.delete("/users/:userId", tokenAuth.tokenAuth, userController.deleteStatusUpdate);

router.post("/users/:userId/posts",tokenAuth.tokenAuth,tokenAuth.userAuth, userController.createPost);

module.exports = router;
