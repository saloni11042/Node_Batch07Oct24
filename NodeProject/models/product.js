// class, constructor, new, this

// class Character {
//    constructor(name,score){
//     this.username = name
//     this.score = score
//    }
//      run(){
//         console.log("Running")
//      }
//      features(){

//      }

// }

// let character1 = new Character("character1", 550)
// let character2 = new Character("character2", 5900)


// const products = [];

const fs = require('fs');
const path = require('path');


const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );

module.exports = class Product{
    constructor(t){
        this.title= t;
    }

    save(){
        // products.push(this);

        

         fs.readFile(p,(err,fileContent)=>{
            console.log(err)
            const products =[];
            if(!err){
                products = JSON.parse(fileContent)
            }
            products.push(this)

            fs.writeFile(p,JSON.stringify((products,err)=>{
                console.log(err)
            }))
            
         }) 
    }

    static fetchAll(callback){
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                console.log(err)
                return [];
            }
            return JSON.parse(fileContent)
        })
    }
}
