require('dotenv').config();
const express = require('express');
const path = require('path');
const http = require('http');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const socketio = require('socket.io');
const bodyParserTest = require("body-parser");
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// List of Collections
const chatRoomModel = require("./models/chatRoomSchema");
const courseDataModel = require("./models/courseDataSchema");
const messageModel = require("./models/messageSchema");
const postModel = require("./models/postSchema");
const userModel = require("./models/userSchema");


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
mongoose.connect(process.env.MONGO_LINK, {useNewUrlParser: true, useUnifiedTopology: true});
const mongo_db = mongoose.connection;
mongo_db.on("error", console.error.bind(console, "connection failure: "));
mongo_db.once("open", function(){
    console.log('database connection established');
})

app.use(express.static(path.join(__dirname, 'front-end')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


io.on('connection', socket => {
    socket.on('message_sent', data => {
        let new_message = new messageModel({
            content: data['content']
        });
        new_message.save();
        console.log(data['room']);
        socket.broadcast.emit('user-chat', data);
    })
    socket.on('add_group', data => {
        
    })
    socket.on('message_sender_background', data => {
        socket.emit('change_sender_chat_background', data);
    })
    
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnect', `User ${socket.id} has left the room chat`);
    })
    socket.on('verify_email', async receiver => {
        const password_encrypt = await bcrypt.hash(receiver['password'], 10);
        console.log(receiver['password']);
        transport.sendMail({
            from: "rmit.itstudent@gmail.com",
            to: receiver['email_address'],
            subject: "Password Generator",
            html: `<h1>Want to join us?</h1><p>Login with this password: ${receiver['password']}</p>`
        })
        let new_account = new userModel({
            email: receiver['email_address'],
            password: password_encrypt
        });
        new_account.save();

    })
    socket.on('login_auth', (login_info) => {
        const account = userModel.findOne({ email: login_info['email'] });
        console.log(login_info['email']);
        userModel.find({email: login_info['email']}, async function(error, data){
            if (data.length===0){
                console.log('login failed');
                socket.emit('login_failed', ''); 
            }else{
                test = await bcrypt.compare(login_info['password'], data[0]['password']);
                console.log('login success');

                // const login_token = jwt.sign(
                //     { user_id: data[0]['_id'], email },
                //     process.env.TOKEN_KEY,
                //     {expiresIn: "3h"}
                // );
                //Save token
                // console.log(userModel);
                // data[0]['token'] = token
                io.emit('join_chat', `user ${login_info['email'].split('@')[0]}  has joined the chat`)
            }
        })
        // // console.log(account.password);
        // if (!account || !bcrypt.compare(login_info['password'], account.password)) {
        //     console.log('login failed');
        //     socket.emit('login_failed', '');
        // } else {
        // }
    })
    // socket.on('join_chat', (user_info){
    //     userModel.find({email: login_info['room'], password: login_info['user_id']}, function(error, data){
    //         if (data.length===0){
    //             socket.emit('login_failed', '')
    //         }else{
    //             console.log('login success');
    //             io.emit('join_chat', `user ${login_info['email'].split('@')[0]}  has joined the chat`)
    //         }
    //     })
    // })
    // socket.on('logout', (login_info) => {
    //     userModel.find({email: login_info['email']}, function(error, data){
    //         console.log('login success');
    //         io.emit('leave_chat', `user ${login_info['email'].split('@')[0]}  has left the chat`)
    //     }
    //     })
    // })
    
})
const PORT = process.env.DEFAULT_PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
