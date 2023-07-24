
let fs = require('fs')

const filename = __dirname + "\\names.txt"
console.log(filename)
let data = fs.readFileSync(filename, "utf-8")
console.log(data)
console.log("The End")
