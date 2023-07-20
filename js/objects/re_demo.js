var pattern = /\d+/
console.log(pattern.test("1234") )


// exec() 
let s = "Abc 123 234"
let matches = /\d+$/.exec(s)

console.log(matches)
console.log("Found " + matches[0] + " at " + matches.index)

let st = "Abc 123 234"
console.log(/\w+/.exec(st))

// test() 
console.log(/[A-Z]+/.test("ABC 123"))

