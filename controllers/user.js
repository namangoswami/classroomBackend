var jwt= require('jsonwebtoken');
var bcrypt= require('bcrypt');
var Class= require('../models/classes.js');
var User=require('../models/users.js');

module.exports.getUserClasses=(req, res)=>{
    Class.find({_id:req.body.classId})
    .exec((err, classObjAr)=>{
        if(err){
            res.status(500).send({message:err});
        }
        if(classObjAr)
        {
            res.status(200).send({classObjAr:classObjAr});
        }
        else{
            res.status(404).send({message:'Not Found'});
        }
    })
}

