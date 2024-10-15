
const express = require('express');
// const { title } = require('process');

const adminData = require('./admin')

const router = express.Router();



router.get('/',(req, res, next)=>{
    console.log(adminData.products)
    const products = adminData.products;
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    
    res.render('shop.ejs',{prods: products,pageTitle: 'Shop'});
    
});

module.exports = router;
