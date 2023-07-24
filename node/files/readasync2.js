
let fs = require('fs')

const filename = __dirname + "\\names.txt"

fs.readFile(filename, "utf-8",
    (err, data) => {
      console.log(err)
      if(err)
         throw err;
      console.log(data)
})

for(i = 1; i <= 2000000000 ; i ++)
   ;

console.log("The End")
