
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "jun28"
});

con.connect(function (err) {
    if (err) throw err;
})

module.exports.con = con 
