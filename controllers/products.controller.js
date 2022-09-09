const productsData = require('../services/data/products.data');

/**
 * @description Get product list
 * @param {*} req Http request
 * @param {*} res Http response
 */
const productList = async (req, res) => {
  try {
    // Get product list from db
    const productList = await productsData.productList();

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

const productInfo = async (req, res) => {
  try {
    const { id } = req.params;

    // Get product info from db
    const [productInfo] = await productsData.productInfo(id);

    if (!productInfo) throw { status: 401 };

    const [category] = productInfo.categories;
    const [seller] = productInfo.sellers;

    delete productInfo.categories;
    delete productInfo.sellers;

    const productInfoFormatted = {
      ...productInfo,
      category,
      seller,
    };

    res.json(productInfoFormatted);
  } catch (error) {
    res.sendStatus(error.status || 401);
  }
};

module.exports = {
  productList,
  productInfo,
};
