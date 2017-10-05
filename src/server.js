var http = require('http');
var fireARequest = require('request');

http.createServer(function (request, response) {
    // http.post('/login', function (request, response) {
    //
    // })
    if (request.url === '/login' && request.method === 'POST') {
        console.log("in login method");
        response.writeHead(200, {'Content-Type': 'text/json'});
        var data = [];
        request.on('data', function (chunk) {
            data.push(chunk);
            console.log(chunk);
        }).on('end', function () {
            data = Buffer.concat(data).toString();
            data = JSON.parse(data);
        });
        console.log("----------")
        console.log(data);
        console.log(data.username);
        fireARequest.post({uri: "http://localhost:5984/_session", body: {'username': 'admin', 'password': 'admin'}, json: true, headers: {}},
            function(error, res){
            // console.log(res);
        });
        response.write(JSON.stringify({"name": "Hello world"}));
        response.end();
    }
    // http.post('/login', function (requst, response) {
    //     console.log("in login method");
    //     response.writeHead(200, {'Content-Type': 'text/json'});
    //     response.write({"name": "Hello world"});
    // });
}).listen(9090);
