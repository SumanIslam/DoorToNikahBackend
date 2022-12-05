const jwt = require('jsonwebtoken');
require('dotenv').config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];

  jwt.verify(
    token,
    ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      // if invalid token send 403 response error
      if(err) return sendStatus(403);
      req.user = decoded.id
      next();
    }
  )
}

module.exports = verifyJWT;