

const fs = require('fs')

const source = __dirname + "\\names.txt"
const target = __dirname + "\\names_copy.txt"

fs.readFile(source, 'utf-8', 
     function(err, data) {
        fs.writeFile(target, data,
             function() {
                 console.log("Copied Successfully!")
             }
        )// writeFIle
     }
) // readFile


