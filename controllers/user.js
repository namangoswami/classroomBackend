var jwt= require('jsonwebtoken');
var bcrypt= require('bcrypt');
var Class= require('../models/classes.js');
var User=require('../models/users.js');

module.exports.getUserClasses=(req, res)=>{
    console.log('hit');
    const user=req.user;
    const userProps={email:user.email, firstName:user.firstName, lastName:user.lastName};
    let classAr=[];
    Class.find({teacher:user._id}).exec((err, classObjAr)=>{
        classAr=[...classObjAr];
        Class.find().exec((err, classObjAr)=>{
        if(err){
            res.status(500).send({message:err});
            console.log(err);
            return;
        }
        if(classObjAr)
        {
            classObjAr.forEach(i=>{
                
                
                    let flag=false;
                    i.students.forEach(j=>{
                        if(j.email===userProps.email)
                        {
                            flag=true;
                            return;
                        }
                    })
                    if(flag)
                    {
                        console.log(i._id)
                         if(classAr.filter(k=> k._id.toString()===i._id.toString()).length<=0)
                        {
                            classAr.push(i);
                        }
                    }
                
            })
            console.log(classAr.length);
            res.status(200).send({classObjAr:classAr});
        }
        else{
            res.status(404).send({message:'Not Found'});
        }
    })
    })
    
}

