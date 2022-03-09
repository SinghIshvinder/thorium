const { route } = require("../routes/route");
const jwt = require("jsonwebtoken");

let tokenAuth = function (req, res, next) {
  let token = req.headers["x-auth-token"]; //expecting a header token in postman body.
  if (!token) return res.send({ status: false, msg: "token must be present" });
  next();
};

let userAuth = function (req, res, next) {
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-thorium");
  let userToBeModified = req.params.userId;
  let userLoggedIn = decodedToken.userId;
  if (userToBeModified != userLoggedIn)
    return res.send({
      status: false,
      msg: "User logged is not allowed to modify the requested users data",
    });

  next();
};

module.exports.tokenAuth = tokenAuth;
module.exports.userAuth = userAuth;
