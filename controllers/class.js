var jwt= require('jsonwebtoken');
var bcrypt= require('bcrypt');
var Class= require('../models/classes.js');
const { default: mongoose } = require('mongoose');

module.exports.getClass=(req, res)=>{
    Class.findOne({_id:req.body.classId})
    .exec((err, classObj)=>{
        if(err){
            res.status(500).send({message:err});
        }
        if(classObj)
        {
            res.status(200).send({classObj:classObj});
        }
        else{
            res.status(404).send({message:'Not Found'});
        }
    })
}


module.exports.addStudent=(req, res)=>{
    const classId=req.body.classId;
    const student=req.body.student;
    console.log(student, classId)
    Class.findOneAndUpdate({_id:classId}, {$addToSet:{students:{...student}}}).exec((err, Class)=>{
        console.log('class',Class)
    });
    res.status(200).send('Updated');
}



module.exports.addDoc=(req, res)=>{
    const classId=req.body.classId;
    const docFile=req.body.doc;
    Class.findOneAndUpdate({_id:classId}, {$push:{data:{...docFile}}}).exec((err, data)=>{
        console.log(data)
    });
}


module.exports.updateClass=(req,res)=>{
    var classObj=req.body.classObj;
    console.log(req.body.classObj)
    console.log('update Class')
    Class.findByIdAndUpdate(classObj._id, {...classObj}).exec((err, classObj)=>{
        if(err)
        {
            res.status(500).send({message:err});
        }
        else if(classObj){
            res.status(200).send({message:"Class Updated"})}
      
    }
    )
            console.log('hit addd', classObj)
            classObj=new Class({...classObj, teacher:new mongoose.Types.ObjectId(classObj.teacher)});
            classObj.save((err, classObj)=>{
                res.status(200).send({message:'Class Created'});
})
}