const jwt = require("jsonwebtoken");

const  jwtSecret  = 'fewfdafgda6fsd6a8fds4fds84f6zx4'

function toJWT(data) {
  return jwt.sign(data, jwtSecret, { expiresIn: "2h" });
}

function toData(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = { toJWT, toData };