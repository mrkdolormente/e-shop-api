const { ObjectId } = require('mongodb');
const { CART_STATUS } = require('../../constants/enum');
const dbConnection = require('../../database/connection');

let _collection;

const _initialize = async () => {
  const db = await dbConnection();
  _collection = db.collection('categories');
};

const productCategoryList = async () => {
  await _initialize();

  return _collection.find().sort({ name: 1 }).toArray();
};

module.exports = {
  productCategoryList,
};
