const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

function tokenAuth(req, res, next) {
  let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  next();
}

router.post("/users", userController.createUser);

router.post("/login", userController.loginUser);

router.get("/users/:userId", tokenAuth, userController.getUserData);

router.put("/users/:userId", tokenAuth, userController.updateUser);

router.delete("/users/:userId", tokenAuth, userController.deleteStatusUpdate);

module.exports = router;
