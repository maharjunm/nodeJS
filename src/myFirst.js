// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end("Hello World");
// }).listen(8080);


var http = require('http');
var date = require('./datePicker');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var params = url.parse(req.url, true).query;
    var year = params.year + " " + params.month;
    res.write(year);
    res.end();
}).listen(9090);
