const path = require('path');

const express = require('express');

const router = express.Router();
const productController = require('../controller/productController')


router.get('/add-product',productController.getAddProduct);
router.post('/add-product',productController.postAddProduct);

module.exports = router;

// exports.routes = router;
// exports.products = products;