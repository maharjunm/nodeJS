// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end("Hello World");
// }).listen(8080);


var http = require('http');
var date = require('./datePicker');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Today's date is " + date.myDateTime());
}).listen(9090);
