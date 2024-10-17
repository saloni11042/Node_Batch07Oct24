
const express = require('express');
// const { title } = require('process');

// const adminData = require('./admin')

const productController = require('../controller/productController')
const router = express.Router();



router.get('/',productController.getProducts);

module.exports = router;
