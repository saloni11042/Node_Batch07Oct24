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


const products = [];

module.exports = class Product{
    constructor(t){
        this.title= t;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}
