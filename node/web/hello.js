const http = require('http');

const server = http.createServer(
    (req, res) => {
    res.statusCode = 200; // ok
    //res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Node World</h1>'); // send to client
    }
);

// Http sever runs at port 8888
server.listen(8888, 'localhost', 
    () => {console.log('Server running...');
});