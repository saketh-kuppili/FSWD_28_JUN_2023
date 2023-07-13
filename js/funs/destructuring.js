const a = [10, 20]

let n1 = a[0]
let n2 = a[1]

let [x, y] = a
console.log(x, y)

// let [v1, v2, v3] = a
// console.log(v1,v2,v3)

// let [v1, v2 = 2, v3 = 30] = [10, 20]
// console.log(v1,v2,v3)

let [v1, ...v2] = [10, 20, 30]
console.log(v1,v2)