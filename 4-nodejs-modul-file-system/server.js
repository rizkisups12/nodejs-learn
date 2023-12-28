var http = require('http');
var fs = require('fs');

// URL for routing
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    switch (req.url) {
        case '/make-file':
            fs.appendFile('new_file.txt', 'Hallo this is file here!', function(err) {
                if(err) throw err;
            })
            res.write('{"message": "New File has been made!"}');
            break;
        case '/':
            res.write('Default!');
            break;
        case '/write':
            fs.open('new_file2.txt', 'w', function (err, file) {
                if (err) throw err;
            })
            res.write('{"message": "Has been write on file!"}');
            break;
        case '/rewrite':
            fs.open('new_file2.txt', 'w+', function (err, file) {
                if (err) throw err;
                
                // kontent yang akan kita tulis ke file
                let content = "Hello Node JS here!";
            
                // tulis konten ke file
                fs.writeFile(file, content, (err) => {
                    if (err) throw err;
                    res.write('{"message1": "Saved!!"}');
                }); 
            
                // baca file
                fs.readFile(file, (err, data) => {
                    if (err) throw err;
                    res.write(`{"message2": "${data.toString('utf8')}"}`);
                });
            });
            break;
        default:
            res.write('404: Not Found!');
    }
    // res.write('{"message": "Hello <b>World</b> in nodejs!"}');
    res.end();
}).listen(3000);

console.log("server running on http://localhost:3000");