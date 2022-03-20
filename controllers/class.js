var jwt= require('jsonwebtoken');
var bcrypt= require('bcrypt');
var Class= require('../models/classes.js');

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
    classObj.findByIdAndUpdate(classId, {$push:{students:{...student}}});
}



module.exports.addDoc=(req, res)=>{
    const classId=req.body.classId;
    const docFile=req.body.student;
    classObj.findByIdAndUpdate(classId, {$push:{data:{...docFile   }}});
}


module.exports.updateClass=(req,res)=>{
    const classObj=req.body.classObj;
    Class.findByIdAndUpdate(classObj._id, {...classObj}).exec((err, classObj)=>{
        if(err)
        {
            res.status(500).send({message:err});
        }
        else if(classObj){
            res.status(200).send({message:"Class Updated"})
        }
        else
        {
            classObj=new Class(classObj);
            classObj.save((err, classObj)=>{
                res.status(200).send({message:'Class Created'});
            })
        }
    })
}