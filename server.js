var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require("socket.io")(http);
var port = 80;
app.use(express.static(__dirname + '/public'));

io.on('connection',function(socket)
      {
    socket.on('chat_messange',function(msg){
        io.emit('chat_message',msg)
    });
    
});

app.listen(port, function() {
      console.log('Listening on *:'+port);
});



