var fs=require('fs');
var http=require('http');

http.createServer(function(req, res){
    fs.readFile('input1.txt', {encoding: 'utf8', flag: 'r'}, function(err, data){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(data);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
        }
    });
    var data=fs.readFileSync('input2.txt', {encoding:'utf8', flag:'r'});
    console.log(data);
    res.write(data);
}).listen(8000);