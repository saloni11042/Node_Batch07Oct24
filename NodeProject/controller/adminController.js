const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing:false
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const description = req.body.description
    const price = req.body.price
    const product = new Product(null,title,imageUrl,description,price);
    product
    .save()
    .then(()=>{
      res.redirect('/');
    })
    .catch(err=> console.log(err))
    
  };

  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    });
  };


  exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit
    if(!editMode){
      return res.redirect('/')
    }
    const prodId = req.params.productId;
      Product.findProductById(prodId,product=>{
        if(!product){
          return res.redirect('/')
        }
        res.render('admin/edit-product', {
          product: product,
          pageTitle: 'Edit Product',
          path: '/admin/edit-product',
          editing: editMode
        });
      })
    
  };

  exports.postEditProduct = (req, res, next) =>{
    const updatedTitle = req.body.title
    const updatedImageUrl = req.body.imageUrl
    const updatedDescription = req.body.description
    const updatedPrice = req.body.price
    const id = req.body.productId
    const updatedProduct = new Product(
      id,updatedTitle,updatedImageUrl,updatedDescription,updatedPrice);
    updatedProduct.save();
    res.redirect('/');
  }