
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 4,
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "jun28"
});
 

module.exports.pool = pool 
