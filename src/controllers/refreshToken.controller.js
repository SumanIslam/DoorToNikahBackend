const jwt = require('jsonwebtoken');
const usersModel = require('../mongoose/user.mongo');

const { createAccessToken } = require('../services/tokenGeneration')

require('dotenv').config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if(!cookies?._refresh_token) return res.sendStatus(401) // unauthorize
  // refresh token
  const refreshToken = cookies._refresh_token;

  // find user by refresh token
  const user = await usersModel.findOne({refreshToken: refreshToken})
  console.log(user);
  if(!user) return res.sendStatus(403) // forbidden
  jwt.verify(
    refreshToken,
    REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      // console.log(decoded.id);
      // console.log(user._id.toString());
      if (err || user._id.toString() !== decoded.id) return res.sendStatus(403);
      const accessToken = createAccessToken(decoded.id)
      res.json({accessToken})
    }
  )
}

module.exports = handleRefreshToken;