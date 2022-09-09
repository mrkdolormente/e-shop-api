const { ObjectId } = require('mongodb');
const { CART_STATUS } = require('../../constants/enum');
const dbConnection = require('../../database/connection');

let _collection;

const _initialize = async () => {
  const db = await dbConnection();
  _collection = db.collection('cart');
};

const cartItemList = async (userId) => {
  await _initialize();

  return _collection
    .aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
          as: 'product',
        },
      },
      {
        $unwind: '$product',
      },
      {
        $match: {
          user_id: ObjectId(userId),
          status: CART_STATUS.ADDED,
        },
      },
    ])
    .toArray();
};

const cartItem = async (userId, productId) => {
  await _initialize();

  return _collection.find({ product_id: ObjectId(productId), user_id: ObjectId(userId) }).toArray();
};

const addItemToCart = async (userId, productId) => {
  await _initialize();

  return _collection.insertOne({
    product_id: ObjectId(productId),
    user_id: ObjectId(userId),
    quantity: 1,
    status: CART_STATUS.ADDED,
    createdAt: new Date(),
  });
};

const updateItemInCart = async (userId, productId, updateQuery) => {
  await _initialize();

  return _collection.update(
    { product_id: ObjectId(productId), user_id: ObjectId(userId) },
    { $set: updateQuery },
    { multi: true }
  );
};

module.exports = {
  cartItemList,
  cartItem,
  addItemToCart,
  updateItemInCart,
};
