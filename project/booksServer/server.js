var express = require('express');
var path = require("path")
var handlers = require("./restHandlers")
var cors = require('cors')

const port = 8888
var app = express();
app.use(express.json());
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/books', handlers.getBooks) 
app.get('/books/author', handlers.getBooksByAuthor)


app.get('/authors', handlers.getAuthorsBooksCount)
app.get("/books/search", handlers.searchBooks)

app.get('/books/:id', handlers.getBookById)


app.post('/books', handlers.addBook)
app.put('/books/:id', handlers.updateBook)
app.delete('/books/:id', handlers.deleteBook)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

