const express = require('express');
const routes = express.Router();

const cartController = require('../controllers/cart.controller');

routes.get('/', cartController.cartItemList);
routes.post('/', cartController.addToCart);

module.exports = routes;
