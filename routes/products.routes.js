const express = require('express');
const routes = express.Router();

const productsController = require('../controllers/products.controller');

routes.get('/', productsController.productList);
routes.get('/categories', productsController.productCategoryList);
routes.get('/:id', productsController.productInfo);

module.exports = routes;
