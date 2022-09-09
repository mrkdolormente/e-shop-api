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
    console.log(cartItem);
    if (!cartItem) {
      await cartData.addItemToCart(userId, productId);
    } else {
      await cartData.updateItemInCart(userId, productId, {
        quantity: (cartItem.quantity += 1),
        status: CART_STATUS.ADDED,
        modifiedAt: new Date(),
      });
    }

    res.json(cartItemList);
  } catch (error) {
    console.log(error);
    res.sendStatus(error?.status || 401);
  }
};

module.exports = {
  cartItemList,
  addToCart,
};
