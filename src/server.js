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
        }).on('end', function () {
            data = Buffer.concat(data).toString();
            data = JSON.parse(data);
            console.log(data);
            fireARequest.post({
                    uri: "http://localhost:5984/_session",
                    body: {'username': data.username, 'password': data.password},
                    json: true,
                    headers: {}
                },
                function (error, res) {
                    console.log(res.body);
                    response.write(JSON.stringify(res.body));
                    response.end();
                });
        });
    }
    // http.post('/login', function (requst, response) {
    //     console.log("in login method");
    //     response.writeHead(200, {'Content-Type': 'text/json'});
    //     response.write({"name": "Hello world"});
    // });
}).listen(9090);
