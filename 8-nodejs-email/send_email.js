var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xiaomim212@gmail.com',
        pass: 'wlii fzxe jkex unyb'
    }
});

var mailOptions = {
    from: 'xiaomim212@gmail.com',
    to: 'rizkisp23@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});