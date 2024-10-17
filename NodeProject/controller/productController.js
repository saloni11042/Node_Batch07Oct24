const products = [];

exports.getAddProduct = (req, res, next) => {
  
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req,res,next)=>{
    
    products.push({title: req.body.title});
    console.log(products)
    res.redirect('/')
}

exports.getProducts = (req, res, next)=>{
    // console.log(adminData.products)
    // const products = adminData.products;
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.render('shop.ejs',{
        prods: products,
        pageTitle: 'Shop'
    });
    
}