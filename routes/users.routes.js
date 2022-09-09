const express = require('express');
const routes = express.Router();

const usersController = require('../controllers/users.controller');

routes.get('/my-info', usersController.userInfo);

module.exports = routes;
