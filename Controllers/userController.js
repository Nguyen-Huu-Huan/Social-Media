require('dotenv').config();
const router = require("express").Router();
const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');


var transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_ACC,
      pass: process.env.EMAIL_PASS
    }
})

const userController = {
    register: async (req, res) => {
        try {
            const password_encrypt = await bcrypt.hash(req.body.password, 10);
            console.log(req.body.email);
            transport.sendMail({
                from: "rmit.itstudent@gmail.com",
                to: req.body.email,
                subject: "Password Generator",
                html: `<h1>Want to join us?</h1><p>Login with this password: ${req.body.password}</p>`
            })
            let new_account = new userModel({
                email: req.body.email,
                password: password_encrypt
            });
            const created_account = await new_account.save();
            res.status(200).json(created_account);
          } catch (error) {
            res.status(500).json(error)
        }
    },
    login: async (req, res) => {
        try {
            const user_search = await userModel.findOne({ email: req.body.email });
            !user_search && res.status(404).json("login failed");
        
            const password_verification = await bcrypt.compare(req.body.password, user_search.password);
            !password_verification && res.status(400).json("incorrect password");
        
            res.status(200).json(user_search)
          } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports = userController;
