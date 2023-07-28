var express = require('express');
var path = require('path');
const port = 8888
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

module.exports = app;

let courses = [{ title: 'Python', fee: 10000 }, { title: 'Full-stack Web Development', fee: 20000 }]

app.get("/today", (req, res) => {
  res.render('today', { today : new Date() })
}
)

app.get('/courses', (req, res) => {
  res.render('list_courses', { courses: courses })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
