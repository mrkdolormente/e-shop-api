const productsData = require('../services/data/products.data');
const categoriesData = require('../services/data/categories.data');

/**
 * @description Get product list
 * @param {*} req Http request
 * @param {*} res Http response
 */
const productList = async (req, res) => {
  try {
    const { q, categoryId } = req.query;

    // Get product list from db
    let productList;

    if (!q) {
      let filters = {};

      if (categoryId) filters = { ...filters, category_id: Number(categoryId) };

      productList = await productsData.productList(filters);
    } else {
      productList = await productsData.productSearch(q);
    }

    res.json(productList);
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

    res.json(productInfo);
  } catch (error) {
    res.sendStatus(error.status || 401);
  }
};

const productCategoryList = async (req, res) => {
  try {
    const productCategoryList = await categoriesData.productCategoryList();
    // Get search product list from db
    res.json(productCategoryList);
  } catch (error) {
    res.sendStatus(error.status || 401);
  }
};

module.exports = {
  productList,
  productInfo,
  productCategoryList,
};
