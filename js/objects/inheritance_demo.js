// Superclass 
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    sellingPrice() {
        return this.price;
    }
}

// Subclass 
class DiscountedProduct extends Product  {
    constructor(name, price, discountRate) {
        super(name, price)    // call superclass's constructor 
        this.discountRate = discountRate;
    }
    // Override method in super class 
    sellingPrice() {
        let discount = super.sellingPrice() * this.discountRate / 100;
        return this.price - discount 
    }
}

p = new Product("Dell XPS 9500", 2000000);
console.log(p.sellingPrice())

dp = new DiscountedProduct("Mac Pro", 2000000, 15);
console.log(dp.sellingPrice().toFixed(2))

