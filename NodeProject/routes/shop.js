
const express = require('express');
// const { title } = require('process');

// const adminData = require('./admin')

const shopController = require('../controller/shopController')

const router = express.Router();

router.get('/',shopController.getIndex);

router.get('/product-list',shopController.getProducts);

router.get('/cart',shopController.getCart);

router.get('/checkout',shopController.getCheckout);

module.exports = router;
