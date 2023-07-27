var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "jun28"
});


con.connect(function (err) {
  if (err) throw err;
 
  var query = con.query("insert into departments set ?",
    {dept_id: 'd2', dept_name: 'Department 2'},
    function (err, result) {
      if (err) throw err;
      console.log(query.sql)
      console.log(`Inserted ${result.affectedRows} rows`)
      con.end()
    }
  );
}
);
 