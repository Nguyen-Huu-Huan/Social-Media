const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
// const userModel = require("./models");
const bodyParserTest = require("body-parser");
// const { schema } = require('./models');
const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'rmit.itstudent@gmail.com',
      pass: 'buildingitsystem'
    }
})
const app = express();
const server = http.createServer(app);
const io = socketio(server);
mongoose.connect('mongodb+srv://huan:buildingitsystem@cluster0.da9it.mongodb.net/user-info?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const mongo_db = mongoose.connection;
mongo_db.on("error", console.error.bind(console, "connection failure: "));
mongo_db.once("open", function(){
    console.log('database connection established');
})

const userSchema = new mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, require: true},
    loginAt: {type: Date, default: Date.now},
    user: {type: String, default: "guest"}    
})


const chatSchema = new mongoose.Schema({
    content: {type: String, require: true},
    sendAt: {type: Date, default: Date.now},
    room: {type: String, default: "Building IT System"}
})
const user_account = mongoose.models['user'] || mongoose.model('user', userSchema);
const message = mongoose.models['message'] || mongoose.model('message', chatSchema);
app.use(express.static(path.join(__dirname, 'front-end')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", function(req, res) {
    let new_account = new user_account({
        email: req.body.email_signin,
        password: req.body.password_signin
    });
    new_account.save();
    res.redirect('/profile.html');
})
io.on('connection', socket => {
    socket.on('message_sent', data => {
        let new_message = new message({
            content: data           
        });
        new_message.save();
        socket.broadcast.emit('user-chat', data);
    })
    socket.on('message_sender_background', data => {
        socket.emit('change_sender_chat_background', data);
    })
    io.emit('join_chat', `user ${socket.id}  has joined the chat`)
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnect', `User ${socket.id} has left the room chat`);
    })
    socket.on('verify_email', receiver => {
        transport.sendMail({
            from: "rmit.itstudent@gmail.com",
            to: receiver['email_address'],
            subject: "Password Generator",
            text: "Your password is: "+receiver['password']
        })
    })
})
const PORT = process.env.PORT||3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
