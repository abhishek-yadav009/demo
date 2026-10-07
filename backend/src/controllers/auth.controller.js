// all logic of routes will be here 
//our server can't study things from req.body be default so we make middlewares for this
//app.use(express.json()); this one we use in app.js
//we use cookie-parser as a middleware


const userModel = require("../models/user.model")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser(req,res){
    const {fullName, email, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    //once diff email found we go for hashin of password
    const hashedPassword = await bcrypt.hash(password,10);

    const user = await userModel.create({
        fullName,
         email,
          password:hashedPassword
    })

}