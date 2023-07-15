class Person {
    constructor(name, email) {
        this.name = name 
        this.email = email 
    }
    show() {
        console.log(this.name)
        console.log(this.email)
    }
    setEmail(email) {
        this.email = email 
    }
}

class Player extends Person {
    constructor(name, email, game) {
        super(name, email)
        this.game = game 
    }

    show() {
        super.show() 
        console.log(this.game)
    }

    setGame(game) {
        this.game = game 
    }

}

p1 = new Person("Jack", "jack@yahoo.com")
p1.show() 

p = new Player('Ronaldo','ronaldo@gmail.com', 'Football')
p.show() 

