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
      //console.log(departments)
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
      if (err) {
        res.status(500).send('Error :' + err.message)
      }
      else
      {
        if(result.affectedRows === 0)
           res.status(404).send("Department Id Not Found!")
        else
           res.sendStatus(204)  // no content 
      }
    }
  );
})


app.post('/depts', (req, res) => {
  var query = pool.query("insert into departments values(?,?)",
    [req.body.id, req.body.name],
    function (err, result) { 
      if (err)  
        res.status(500).send('Error :' + err.message)
      else
        res.status(201).send("Department added successfully!");
    }
  );
})

// UPDATE 
app.put('/depts/:id', (req, res) => {
  // validate data 
  let name = req.body.name 
  if(!name || name.length == 0) {
      res.status(400).send("Name is missing!")
      return;
  }
 
  var query = pool.query("update departments set dept_name = ? where dept_id = ?",
    [req.body.name, req.params.id],
    function (err, result) { 
      if (err)  
        res.status(500).send('Error :' + err.message)
      else
      {
        if(result.affectedRows === 0)
           res.status(404).send("Department Id Not Found!")
        else
           res.json({id : req.params.id, name : req.body.name})
      }
    }
  );
})



app.listen(port, () => {
  console.log(`REST APi at port ${port}`)
})

