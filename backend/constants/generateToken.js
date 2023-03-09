var jwt = require("jsonwebtoken");

function generateAccessToken(data) {
  let token = jwt.sign(data, process.env.TOKEN_SECRET,{expiresIn:"5sec"});
    return {token:token,expiry:"5sec"}
  }

module.exports = generateAccessToken;