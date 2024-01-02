var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var nodemailer = require('nodemailer');

http.createServer((req, res) => {

    if(req.url === "/") {
        // redirect ke halaman contact form
        res.writeHead(302, {
            'Location': '/contact/'
          });
        res.end();
    }

    // load the contact form
    if(req.url === "/contact/" && req.method === "GET"){
        fs.readFile("contact_form.html", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }

    // send the email
    if(req.url === "/contact/" && req.method === "POST"){

        var requestBody = '';
        req.on('data', function(data) {
            // tangkap data dari form
            requestBody += data;

            // kirim balasan jika datanya terlalu besar
            if(requestBody.length > 1e7) {
              res.writeHead(413, 'Request Entity Too Large', {'Content-Type': 'text/html'});
              res.end('<!doctype html><html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>');
            }
        });

        req.on('end', function() {
            let formData = qs.parse(requestBody);
            // send the email
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'xiaomim212@gmail.com',
                    pass: 'wlii fzxe jkex unyb'
                }
            });
            console.log(formData, transporter);
            
            let mailOptions = {
                from: 'xiaomim212@gmail.com',
                replyTo: 'xiaomim212@gmail.com',
                to: formData.email,
                subject: formData.subject,
                text: formData.message
            };
            
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) throw err;
                console.log('Email sent: ' + info.response);
                res.end("Your email has been send!");
            }); 
        });
               
    }

}).listen(3000);

console.log('server listening on http://localhost:3000/');