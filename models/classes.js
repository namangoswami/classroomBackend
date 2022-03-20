var mongoose=require("mongoose");

const classSchema=mongoose.Schema({
    className:{type:String, required:true},
    section:{type:String, required:true},
    subject:{type:String, required:true},
    students:[{
        firstName:String,
        lastName:String,
        email:String
    }],
    teacher:[mongoose.Schema.Types.ObjectId],
    data:[String]
})

const Class=mongoose.model('Class', classSchema);
module.exports=Class;