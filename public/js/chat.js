  var socket = io.connect('http://localhost:3000');
  $('form').submit(function () {
      if($('#message').val() != '') {
          socket.emit('chat message', $('#message').val());
          $('#message').val('');
          return false;
      }
      else
      {
          return false;
      }
  });
  socket.on('chat message', function (msg) {
      console.log(msg);
      $('#messages').append($('<li>').text(msg));
  });
