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
    email: {type: String, require: true, unique: true, dropDups: true},
    password: {type: String, require: true},
    loginAt: {type: Date, default: Date.now},
    new_user_status: {type: Boolean, default: true},
    user: {type: String, default: "guest"}, 
    post: {type: Array, default: []}
})
const messageSchema = new mongoose.Schema({
    message_id: {type: Number, default: 2539},
    content: {type: String, require: true},
    sender: {type: String, default: "guess"},
    sendAt: {type: Date, default: Date.now},
})

const user_account = mongoose.models['users'] || mongoose.model('users', userSchema);
const message = mongoose.models['message'] || mongoose.model('message', messageSchema);
app.use(express.static(path.join(__dirname, 'front-end')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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
    
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnect', `User ${socket.id} has left the room chat`);
    })
    socket.on('verify_email', receiver => {
        transport.sendMail({
            from: "rmit.itstudent@gmail.com",
            to: receiver['email_address'],
            subject: "Password Generator",
            html: `<h1>Want to join us?</h1><p>Login with this password: {$receiver['password']}</p>`
        })
        let new_account = new user_account({
            email: receiver['email_address'],
            password: receiver['password']
        });
        new_account.save();
    })
    socket.on('login_auth', (login_info) => {
        user_account.find({email: login_info['email'], password: login_info['password']}, function(error, data){
            if (data.length===0){
                socket.emit('login_failed', '')
            }else{
                console.log('login success');
                io.emit('join_chat', `user ${login_info['email'].split('@')[0]}  has joined the chat`)
            }
        })
    })
    // socket.on('join_chat', (user_info){
    //     user_account.find({email: login_info['room'], password: login_info['user_id']}, function(error, data){
    //         if (data.length===0){
    //             socket.emit('login_failed', '')
    //         }else{
    //             console.log('login success');
    //             io.emit('join_chat', `user ${login_info['email'].split('@')[0]}  has joined the chat`)
    //         }
    //     })
    // })
    // socket.on('logout', (login_info) => {
    //     user_account.find({email: login_info['email']}, function(error, data){
    //         console.log('login success');
    //         io.emit('leave_chat', `user ${login_info['email'].split('@')[0]}  has left the chat`)
    //     }
    //     })
    // })
    
})
const PORT = process.env.PORT||3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
