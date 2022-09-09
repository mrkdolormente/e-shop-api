require('dotenv').config();

const jwt = require('jsonwebtoken');

/**
 * @description Verify user token
 * @param {*} req Http request
 * @param {*} res Http response
 * @param {*} next pass control to the next middleware function
 */
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  // Check if bearer header is existent
  if (typeof bearerHeader !== 'undefined') {
    // Split bearer header string with space
    const bearer = bearerHeader.split(' ');

    // Get bearer token
    const bearerToken = bearer[1];

    // Verify bearer token
    jwt.verify(bearerToken, process.env.SECRET, (err, authData) => {
      if (err) {
        // Send error response when verification failed
        res.sendStatus(403);
      } else {
        // Add the authentication data to http request
        req.authData = authData;

        // Proceed to the next middleware function
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};

module.exports = verifyToken;
