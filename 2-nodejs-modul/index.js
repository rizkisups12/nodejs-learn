// impor modul mementjs
var moment = require("moment");
var greetings = require("./greetings");

// menggunakan modul momentjs
console.log(greetings.Morning());
console.log("Now: " + moment().format('D MMMM YYYY, h:mm:ss a'));