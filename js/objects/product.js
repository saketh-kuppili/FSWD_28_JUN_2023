class Product
{
    constructor(name, price, disrate = 10) {
        this.name = name
        this.price = price
        this.disrate = disrate 
    }

    getSellingPrice() {
        return this.price - (this.price * this.disrate / 100);
    }

}


p1 = new Product("P1", 1000, 20)  // create an object/instance 
p2 = new Product("P2", 5000)

console.log(p1.getSellingPrice())

