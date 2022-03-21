var  jwt = require('jsonwebtoken');
var User = require('../models/users.js');

module.exports= verifyToken=(req, res, next)=>{
    if(req.headers&&req.headers.authorization&&req.headers.authorization.split(' ')[0]==='JWT'){
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, (err, decode)=>{
            if(err)req.user=undefined;
            User.findOne({_id:decode.id}).exec((err, user)=>{
                if(err){
                    res.status(420).send({message:err});
                }
                else
                {
                    req.user=user;
                    next();
                }
            })
        })
    }
    else{
        res.status(401).send({message:'Unauthorized'})
        return;
    }
}