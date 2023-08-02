var express = require('express');

const port = 8888
var app = express();

// Middleware 
function logger(req, res, next) {
  //console.log(req)
  console.log("URL : " + req.originalUrl)
  next()
}

function addTimestamp(req, res, next) {
  req.startTime = new Date() 
  next()
}

app.use('/list', logger)
app.use(addTimestamp)


app.get("/", function (req, res) {
  res.send(`<h1>Middleware Demo</h1> Started at : ${req.startTime}`)
})

app.get("/list", function (req, res) {
  res.send(`<h1>Listing </h1>`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

