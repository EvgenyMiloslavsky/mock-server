let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

let messages = [];

const port = process.env.PORT || 3000;

io.on('connection', socket => {

    console.log('user connected');
    socket.on('new-message', message => {
      messages.push(message);
      console.log(messages);
      socket.emit('messages', messages);
    })
  }
);

server.listen(port, () => {
  console.log(`started on port ${port}`)
});
