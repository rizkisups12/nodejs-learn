var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {

    fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(3000);

console.log("server running on http://localhost:3000");