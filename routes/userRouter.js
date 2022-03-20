var express=require('express');
var verifyToken=require('../middleware/authJWT.js');
var {getClass, updateClass, addStudent} =require('../controllers/class.js');

const app=express.Router();

app.get('/getClasses',verifyToken,getUserClasses);

module.exports=app