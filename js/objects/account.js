class Account {
    #balance  // private field 

    constructor(customer, balance) {
        this.#balance = balance 
    }
}

let a1 = new Account("Steve", 100000)
console.log(a1.#balance)
