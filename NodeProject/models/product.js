const fs = require('fs');
const path = require('path');


const p = path.join(
    path.dirname(require.main.filename),//NodeProject/data/products.json
    'data',
    'products.json'
  );

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
  
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
   
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(fileContent));
    });
  }
};
