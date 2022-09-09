const cartData = require('../services/data/cart.data');

/**
 * @description Get product list
 * @param {*} req Http request
 * @param {*} res Http response
 */
const cartItemList = async (req, res) => {
  try {
    // Get product list from db
    const productList = await cartData.cartItemList();

    const productListFormatted = productList.map((product) => {
      const [category] = product.categories;
      const [seller] = product.sellers;

      delete product.categories;
      delete product.sellers;

      return {
        ...product,
        category,
        seller,
      };
    });

    res.json(productListFormatted);
  } catch (error) {
    console.log(error);
    res.sendStatus(error?.status || 401);
  }
};

module.exports = {
  cartItemList,
};
