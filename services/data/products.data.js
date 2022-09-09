const { ObjectId } = require('mongodb');
const dbConnection = require('../../database/connection');

let _collection;

const _initialize = async () => {
  const db = await dbConnection();
  _collection = db.collection('products');
};

const productList = async () => {
  await _initialize();

  return _collection
    .aggregate([
      {
        $lookup: {
          from: 'categories',
          localField: 'category_id',
          foreignField: '_id',
          as: 'categories',
        },
      },
      {
        $lookup: {
          from: 'sellers',
          localField: 'seller_id',
          foreignField: '_id',
          as: 'sellers',
        },
      },
    ])
    .toArray();
};

const productInfo = async (id) => {
  await _initialize();

  return _collection
    .aggregate([
      {
        $lookup: {
          from: 'categories',
          localField: 'category_id',
          foreignField: '_id',
          as: 'categories',
        },
      },
      {
        $lookup: {
          from: 'sellers',
          localField: 'seller_id',
          foreignField: '_id',
          as: 'sellers',
        },
      },
      {
        $match: {
          _id: ObjectId(id),
        },
      },
    ])
    .toArray();
};

module.exports = {
  productList,
  productInfo,
};
