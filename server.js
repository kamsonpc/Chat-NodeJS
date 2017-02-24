var app = require('express')();
var http = require('http').Server(app);
var port = 80;
app.get("/",function(req,res)
       {
res.sendFile(__dirname + '/index.html');    
});
http.listen(port, function() {
      console.log('Listening on *:'+port);
});



