var mysql = require('mysql');

var con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "jun28"
  }
);


con.connect( err => {
    if (err) throw err;
    console.log("Connected!");
    con.end() 
  }
);
