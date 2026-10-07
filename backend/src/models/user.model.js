//here we will create user model how user data should be

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique: true, // this means we can create only one account with one email

    },
    password:{
        type:String,
    }
},
//when user created and updated last time
{
timestamps:true
}
)

//model is used to use schema and give us func to work with user data and operation 
const userModel = mongoose.model("user",userSchema);

module.exports = userModel;