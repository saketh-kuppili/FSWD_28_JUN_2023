var express = require('express');
var path = require('path');
const port = 8888
var app = express();

app.use(express.static('static'))

app.get("/", (req, res) => {
  res.end("<h1>Static Files Demo </h1>")
}
)
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
