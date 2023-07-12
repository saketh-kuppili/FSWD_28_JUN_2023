let a = [1,3,4,5,10,30]
 
function process(v, idx) {
    if (idx % 2 == 0)
        console.log(v)
}

// a.forEach(process)

// a.forEach( function(v) {
//      console.log(v)
//   }
// )

a.forEach( v => console.log(v))


