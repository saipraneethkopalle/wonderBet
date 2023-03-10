var jwt = require("jsonwebtoken");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.TOKEN_SECRET)
}

module.exports = generateAccessToken;