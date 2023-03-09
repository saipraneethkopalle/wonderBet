var jwt = require("jsonwebtoken");

function generateAccessToken(data) {
  let token = jwt.sign(data, process.env.TOKEN_SECRET,{expiresIn:"5s"});
    return {token:token,expiry:"5s"}
  }

module.exports = generateAccessToken;