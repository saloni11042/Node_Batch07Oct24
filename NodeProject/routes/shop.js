
const express = require('express');
// const { title } = require('process');

// const adminData = require('./admin')

const shopController = require('../controller/shopController')

const router = express.Router();

router.get('/',shopController.getIndex);

router.get('/products',shopController.getProducts);

router.get('/products/:productId',shopController.getProduct);

router.get('/cart',shopController.getCart);

router.post('/cart',shopController.postCart)

router.get('/orders',shopController.getOrders);

router.get('/checkout',shopController.getCheckout);

module.exports = router;
