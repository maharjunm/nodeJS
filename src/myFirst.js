// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end("Hello World");
// }).listen(8080);


var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('file.html', function (error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
    });
    fs.appendFile('file.html', 'Maharjun', function (error, data) {
        if (error) throw error;
       console.log("Saved into that file");
    });
    fs.open('newFile.txt', 'w', function (error, file) {
        if (error) throw error;
        console.log("Saved new file");
        var someContent = "This is the content";
        fs.write(file, someContent, 0, someContent.length, null, function (error) {
            if (error) throw error;
            fd.close(file, function () {
                console.log("Content is written into the file");
            });
        })
    })
    res.end();
}).listen(9090);
