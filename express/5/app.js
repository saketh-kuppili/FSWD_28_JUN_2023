var express = require('express');
var path = require('path');

var adminRouter = require('./admin');
app.use('/admin', adminRouter);

const port = 8888
var app = express();
 
module.exports = app;

app.get("/", (req, res) => {
  res.end("<h1>Main Router</h1>")
}
)
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
