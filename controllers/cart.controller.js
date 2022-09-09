const { CART_STATUS } = require('../constants/enum');
const cartData = require('../services/data/cart.data');

/**
 * @description Get cart item list
 * @param {*} req Http request
 * @param {*} res Http response
 */
const cartItemList = async (req, res) => {
  try {
    const { _id: id } = req.authData;

    const cartItemList = await cartData.cartItemList(id);

    res.json(cartItemList);
  } catch (error) {
    console.log(error);
    res.sendStatus(error?.status || 401);
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const { _id: userId } = req.authData;

    const [cartItem] = await cartData.cartItem(userId, productId);

    let operationReturn;

    if (!cartItem) {
      operationReturn = await cartData.addItemToCart(userId, productId);
    } else {
      operationReturn = await cartData.updateItemInCart(userId, productId, {
        quantity: (cartItem.quantity += 1),
        status: CART_STATUS.ADDED,
        modifiedAt: new Date(),
      });
    }

    res.json(operationReturn);
  } catch (error) {
    console.log(error);
    res.sendStatus(error?.status || 401);
  }
};

const deleteItemInCart = async (req, res) => {
  try {
    const { id } = req.params;

    const operationReturn = await cartData.deleteItemInCart(id);

    res.json(operationReturn);
  } catch (error) {
    console.log(error);
    res.sendStatus(error?.status || 401);
  }
};

const deleteMultipleItemsInCart = async (req, res) => {
  try {
    const { ids } = req.query;

    console.log(ids);

    const operationReturn = await cartData.deleteMultipleItemsInCart(ids);

    res.json(operationReturn);
  } catch (error) {
    console.log(error);
    res.sendStatus(error?.status || 401);
  }
};

module.exports = {
  cartItemList,
  addToCart,
  deleteItemInCart,
  deleteMultipleItemsInCart,
};
