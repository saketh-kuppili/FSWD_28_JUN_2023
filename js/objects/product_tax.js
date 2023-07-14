class Product
{
    static taxrate = 15;
    static setTaxrate(newRate) {
         Product.taxrate = newRate     
    }

    constructor(name, price, disrate = 10) {
        this.name = name
        this.price = price
        this.disrate = disrate 
    }

    getSellingPrice() {
         let discounted =  this.price - (this.price * this.disrate / 100);
         let tax = discounted * Product.taxrate / 100
         return discounted + tax 
    }

}


p1 = new Product("P1", 1000, 20)  // create an object/instance 
p2 = new Product("P2", 5000)

Product.setTaxrate(20)

console.log(p1.getSellingPrice())  // instance method 
console.log(p2.getSellingPrice())  // instance method 

