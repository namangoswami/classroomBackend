var express=require('express');
var verifyToken=require('../middleware/authJWT.js');
var {getClass, updateClass, addStudent, addDoc} =require('../controllers/class.js');

const app=express.Router();

app.post('/',verifyToken,getClass )
app.post('/addStudent', verifyToken, addStudent);
app.post('/addDoc', verifyToken, addDoc);
app.post('/updateClass',verifyToken, updateClass);

module.exports=app