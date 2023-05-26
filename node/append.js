var fs=require('fs');
var http=require('http');

http.createServer(function(req, res){
    fs.appendFile('input1.txt', 'Hello World!', function(err){
        if(err)
        {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("404 NOT FOUND");
        }
        else
        {
            res.writeHead(200, {'Content-Type':'text/html'});
            return res.end();
        }
    });
}).listen(8000);

// var fs=require('fs');
// fs.appendFile('input1.txt', "HELLO WORLD!", function(err){

// })