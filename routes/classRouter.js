var express=require('express');
var verifyToken=require('../middleware/authJWT.js');
var {getClass, updateClass, addStudent} =require('../controllers/class.js');

const app=express.Router();

app.get('/',verifyToken,getClass )
app.post('/addStudent', verifyToken, addStudent);
app.post('/updateClass',verifyToken, updateClass);

module.exports=app