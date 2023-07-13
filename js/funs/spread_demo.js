const a1 = [10, 20]

const a2 = [1, ...a1, 2]   // spread operator 

a1.push(30)
a2.push(100)
console.log(a1)
console.log(a2)
