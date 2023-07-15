class Student {
    static courses = new Map ([['python',10000], ['fswd', 20000], ['java', 30000]])

    constructor(name, course , feePaid = 0) {
        this.name = name 
        this.course = course 
        this.feePaid = feePaid
    }

    getTotalFee() {
        return  Student.courses.get(this.course);
    }

    getDue() {
        return  this.getTotalFee() - this.feePaid 
    }

    payment(amount) {
        this.feePaid += amount 
    }

    setCourse(newCourse) {
        this.course = newCourse 
    }

    toString() {
        return  `${this.name} - ${this.course} - ${this.feePaid}`
    }
}


let students = [ new Student("Larry", 'python'), 
                 new Student('Scott', 'java', 10000),
                 new Student('Jason', 'python', 10000)
                ]

students.filter( s => s.getDue() == 0)
        .forEach( s => console.log(s))
