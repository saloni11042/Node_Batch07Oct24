const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => 
  {
    Product.fetchAll().then(([rows,fieldData])=>{
      res.render('shop/product-list', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products',
      });
    })
    .catch(err => console.log(err))
  };
  

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findProductById(prodId)
  .then(([product])=>{
    res.render('shop/product-detail', {
      product: product[0],
      pageTitle: product.title,
      path: '/products',
    });
  })
  .catch(err=> console.log(err))
 
};


exports.getIndex = (req, res, next) => {
  // Product.fetchAll().then(([rows,fieldData])=>{
  //   res.render('shop/index', {
  //     prods: rows,
  //     pageTitle: 'Shop',
  //     path: '/',
  //   });
  // })
  // .catch(err => console.log(err))
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
      pageTitle: 'Your Cart',
      path: '/cart',
    });
};


exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findProductById(prodId,product=>{
    Cart.addProduct(prodId,product.price)
  })
  res.redirect('/cart')
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders',
  });

};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout',
  });

};

