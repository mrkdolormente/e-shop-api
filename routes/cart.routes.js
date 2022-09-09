const express = require('express');
const routes = express.Router();

const cartController = require('../controllers/cart.controller');

routes.get('/', cartController.cartItemList);
routes.post('/', cartController.addToCart);
routes.delete('/:id', cartController.deleteItemInCart);
routes.delete('/', cartController.deleteMultipleItemsInCart);

module.exports = routes;
