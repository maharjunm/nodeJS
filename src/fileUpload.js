var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (request, response) {
    if (request.url === '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(request, function (error, fields, files) {
            if (error) throw error;
            var oldPath = files.filetoupload.path;
            var newPath = "./" + files.filetoupload.name;
            fs.rename(oldPath, newPath, function (error) {
                if (error) throw error;
                console.log("File has been created");
                response.write("File has been uploaded");
                response.end();
            });
        });
    } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        response.write('<input type="file" name="filetoupload"> <br></input>');
        response.write('<input type="submit"><br>');
        response.write('</input>');
        response.write('</form>');
        return response.end();
    }
}).listen(9091);
