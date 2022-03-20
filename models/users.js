var mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    email:{type:String, unique:true},
    firstName:String,
    lastName:String,
    password:String
})

const User=mongoose.model('User', userSchema);
module.exports=User;