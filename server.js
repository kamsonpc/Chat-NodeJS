var http = require("http");
var fs = require('fs');
var port = 80;
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end();
});
server.listen(port);
console.log("Server is listening");
