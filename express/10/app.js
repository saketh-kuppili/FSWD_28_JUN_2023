var express = require('express');
var { pool } = require("./database_pool")

const port = 8888
var app = express();

app.use(express.json()) // process JSON input 

// send all dept to client 
app.get('/depts', (req, res) => {
  var query = pool.query("select * from departments",
    function (err, departments) {
      if (err) {
        res.status(500).send('Error :' + err.message)
      }
      else
        res.json(departments)
    }
  );
})


// send one dept by given id to client 
app.get('/depts/:id', (req, res) => {
  var query = pool.query("select * from departments where dept_id = ?",
    [req.params.id],
    function (err, departments) {
      console.log(departments)
      if (err) {
        res.status(500).send('Error :' + err.message)
      }
      else
      {
        if(departments.length === 0)
           res.status(404).send("Department Id Not Found!")
        else
           res.json(departments[0])
      }
    }
  );
})

// Delete dept by given id 
app.delete('/depts/:id', (req, res) => {
  var query = pool.query("delete from departments where dept_id = ?",
    [req.params.id],
    function (err, result) {
      console.log(result)
      if (err) {
        res.status(500).send('Error :' + err.message)
      }
      else
      {
        if(result.affectedRows === 0)
           res.status(404).send("Department Id Not Found!")
        else
           res.status(204)
      }
    }
  );
})


/*

app.get('/add', (req, res) => {
  res.render('adddept')
})

app.post('/add', (req, res) => {
  var query = pool.query("insert into departments values(?,?)",
     [req.body.deptid, req.body.deptname],
    function (err, result) { 
      if (err)  
        res.send(`<h1>Error while adding department. Error : ${err.sqlMessage}`)
      else
        res.send(`<h1>Added Department ${req.body.deptname} Successfully!!`)
    }
  );
})

*/

app.listen(port, () => {
  console.log(`REST APi at port ${port}`)
})

