var jwt= require('jsonwebtoken');
var bcrypt= require('bcrypt');
var User= require('../models/users.js');

module.exports.login=(req, res)=>{
    User.findOne({email:req.body.email})
    .exec((err, user)=>{
        if(err)
        {
            res.status(500).send({message:'You are dumb', err:err});
            return;
        }
        if(!user)
        {
            return res.status(404).send({message:'User Not Found'});
        }
        var passValid=bcrypt.compareSync(req.body.password, user.password);
        if(!passValid)
        {
            return res.status(401).send({accessToken:null, message:"Invalid Password"});
        }
        var token=jwt.sign({
            id:user._id},
            process.env.API_SECRET,{
                expiresIn:8000
            }
        );
        res.status(200).send({
            user:{
                ...user,
                token:token
            },
            message:"Login Successful",
        });
    });
}


module.exports.signup=(req, res)=>{
    console.log(req.body);
    const user=new User({...req.body.user, password:bcrypt.hashSync(req.body.user.password, 8)});
    user.save((err, user)=>{
        if(err)
        {
            res.status(500).send({message:err});
            return;
        }
        else{
            res.status(200).send({message:"User created!"})
        }
        
    })
}