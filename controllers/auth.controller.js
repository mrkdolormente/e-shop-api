require('dotenv').config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const usersData = require('../services/data/users.data');

/**
 * @description Verify user login request
 * @param {*} req Http request
 * @param {*} res Http response
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Get user info
    const [user] = await usersData.userInfo(email);

    // Throw error if user does not exist
    if (!user) throw { status: 401 };

    // Check if saved password and request password is equal
    const isEqual = await bcrypt.compare(password, user.password);

    // Throw error if password comparison is not equal
    if (!isEqual) throw { status: 401 };

    // Generate auth token
    jwt.sign(user, process.env.SECRET, { expiresIn: process.env.EXPIRES_IN }, (err, token) => {
      if (err) {
        // Throw error if token generation encounter error
        throw { status: 401 };
      } else {
        // Send response with the auth token
        res.json({
          token,
        });
      }
    });
  } catch (error) {
    res.sendStatus(error.status);
  }
};

module.exports = {
  login,
};
