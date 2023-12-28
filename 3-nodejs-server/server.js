var http = require('http');
//query string
var url = require('url');

// URL for routing
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     switch (req.url) {
//         case '/about':
//             res.write('about page!');
//             break;
//         case '/profile':
//             res.write('profile page!');
//             break;
//         case '/product':
//             res.write('product page!');
//             break;
//         default:
//             res.write('404: Not Found!');
//     }
//     // res.write('{"message": "Hello <b>World</b> in nodejs!"}');
//     res.end();
// }).listen(3000);

// query string
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(request.url, true).query;
    var txt = 'Kata kunci: ' + q.keyword;
    response.end(txt);
}).listen(3000);

console.log("server running on http://localhost:3000");