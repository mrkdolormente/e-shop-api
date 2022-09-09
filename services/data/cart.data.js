const { ObjectId } = require('mongodb');
const dbConnection = require('../../database/connection');

let _collection;

const _initialize = async () => {
  const db = await dbConnection();
  _collection = db.collection('cart');
};

const cartItemList = async (id) => {
  await _initialize();

  return _collection
    .aggregated([
      {
        $lookup: {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
          as: 'product',
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
  cartItemList,
};
