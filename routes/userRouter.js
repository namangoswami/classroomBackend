var express=require('express');
var verifyToken=require('../middleware/authJWT.js');
const  { getUserClasses }=require('../controllers/user.js');

const app=express.Router();

app.get('/getClasses',verifyToken,getUserClasses);

module.exports=app