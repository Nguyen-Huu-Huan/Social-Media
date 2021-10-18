const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'front-end')));
io.on('connection', socket => {
    socket.on('message_sent', data => {
        socket.broadcast.emit('user-chat', data);
    })
    io.emit('join_chat', `user ${socket.id}  has joined the chat`)
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnect', `User ${socket.id} has left the room chat`);
    })
})
const PORT = process.env.PORT||3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
