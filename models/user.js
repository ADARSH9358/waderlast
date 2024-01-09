const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportlocalmongoose = require("passport-local-mongoose");

const User=new Schema({
    email:{
        type:String,
        required:true
    }
})
User.plugin(passportlocalmongoose);

module.exports = mongoose.model('User', User);
/*
    *user name and passpowrd willautomatically define
*/