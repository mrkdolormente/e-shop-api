const dbConnection = require('../../database/connection');

let _collection;

const _initialize = async () => {
  const db = await dbConnection();
  _collection = db.collection('users');
};

const userInfo = async (email) => {
  await _initialize();

  return _collection.find({ email }).limit(1).toArray();
};

module.exports = {
  userInfo,
};
