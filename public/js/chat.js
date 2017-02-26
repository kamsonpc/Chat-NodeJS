        
     var socket = io.connect('http://localhost:8080');
$('form').submit(function(){
    socket.emit('chat_messange',$('#message').val());
    $('message').val('');
    return false;
});
socket.on('chat_message',function(msg){
    $('#messages').append($('<li>').text(msg));
});  