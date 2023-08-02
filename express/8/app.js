
var path = require('path');
var express = require('express');
var { con } = require("./database")

const port = 8888
var app = express();

app.use(express.static('views'))   // for style sheet 

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/depts', (req, res) => {
  var query = con.query("select * from departments",
    function (err, depts) {
      if (err) throw err;
     
      res.render('listdept', { departments: depts })
    }
  );
})

app.get('/depts/delete/:dept', (req, res) => {
    res.send("Deleting...")
})



app.get('/employees/:dept', (req, res) => {

  var query = con.query("select * from employees where dept_id = ?",
    [req.params.dept],
    function (err, employees) {
      if (err) throw err;
     
      res.render('listemp', 
          { emps : employees, 
            dept : req.params.dept })
    }
  );
})

app.get('/add', (req, res) => {
  res.render('adddept')
})

app.post('/add', (req, res) => {
  var query = con.query("insert into departments values(?,?)",
              [req.body.deptid, req.body.deptname],
    function (err, result) {
      if (err) throw err;
      res.send(`<h1>Added Department ${req.body.deptname} Successfully!!`)
    }
  ); 
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

