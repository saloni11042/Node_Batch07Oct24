const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'cart.json'
);

module.exports = class Cart{
    // Fetch previous cart / create cart
    static addProduct(id,productPrice){
      
        fs.readFile(p, (err, fileContent) => {
          let cart= { products:[], totalPrice:0};
            if (!err) {
              cart = JSON.parse(fileContent);
            }
         
          // Read data in cart => existing product
          let existingProductIndex = cart.products.findIndex(
            p => p.id === id);
            const existingProduct = cart.products[existingProductIndex]
             // add new product / update product

             let updatedProduct;

             if(existingProduct){
                updatedProduct = {...existingProduct}
                updatedProduct.qty = updatedProduct.qty+1
                cart.products=[...cart.products]
                cart.products[existingProductIndex]=updatedProduct;
             }
             else{
                updatedProduct = {id:id, qty:1}
                cart.products=[...cart.products,updatedProduct]
             }

             cart.totalPrice=cart.totalPrice + +productPrice;
             fs.writeFile(p, JSON.stringify(cart), err => {
              console.log(err);
            });
          });
    }
    

    
   
}