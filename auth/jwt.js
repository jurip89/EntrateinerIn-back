const jwt = require("jsonwebtoken");
require('dotenv').config()
const  jwtSecret  = process.env.SECRET

function toJWT(data) {
  return jwt.sign(data, jwtSecret, { expiresIn: "2h" });
}

function toData(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = { toJWT, toData };