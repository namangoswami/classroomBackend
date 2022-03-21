var mongoose=require("mongoose");

const classSchema=mongoose.Schema({
    className:{type:String, required:true},
    section:{type:String, required:true},
    subject:{type:String, required:true},
    students:{
        type:Array
    },
    teacher:[mongoose.Schema.Types.ObjectId],
    data:{
        type:Array
    }
})

const Class=mongoose.model('Class', classSchema);
module.exports=Class;