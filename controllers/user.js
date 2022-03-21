var jwt= require('jsonwebtoken');
var bcrypt= require('bcrypt');
var Class= require('../models/classes.js');
var User=require('../models/users.js');

module.exports.getUserClasses=(req, res)=>{
    const user=req.user;
    const userProps={email:user.email, firstName:user.firstName, lastName:user.lastName}
    // console.log(user);
    Class.find({$or:[{students:{$in:[user]}}, {teacher:user}]})
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

