const express = require('express');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.use('/products', ProductController);

module.exports = routes;