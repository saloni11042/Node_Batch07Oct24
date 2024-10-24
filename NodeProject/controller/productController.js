// const products = [];
const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
  
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title)
    product.save()
    //products.push({title: req.body.title});
    console.log(product)
    res.redirect('/')
}

exports.getProducts = (req, res, next)=>{
    // console.log(adminData.products)
    // const products = adminData.products;
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    Product.fetchAll((products)=>{
        res.render('shop.ejs',{
            prods: products,
            pageTitle: 'Shop'
        });
    })
    
    
}