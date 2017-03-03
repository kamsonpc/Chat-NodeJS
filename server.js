var express = require('express')
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 3000;
app.use(express.static(__dirname + '/public'));

io.on('connection',function(socket)
      {
    socket.on('chat message',function(msg){
        io.emit('chat message',msg)
    });
    
});
server.listen(port, function() {
      console.log('Listening on *:'+port);
});



