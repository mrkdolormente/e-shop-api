const usersData = require('../services/data/users.data');

/**
 * @description Get user info
 * @param {*} req Http request
 * @param {*} res Http response
 */
const userInfo = async (req, res) => {
  const { email } = req.authData;

  // Get user info from db
  const user = await usersData.userInfo(email);
  // Remove password property on query response
  delete user.password;

  res.json(user);
};

module.exports = {
  userInfo,
};
