var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log(filename)
    fs.readFile(filename, function(err, data_) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }  
      res.writeHead(200, {'Content-Type': 'application/octet-stream'});
      res.write(data_);
      return res.end();
    });
}).listen(8080);

// 'application/octet-stream'