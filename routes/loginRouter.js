var express=require('express');
var { login, signup } =require('../controllers/login.js')
var verifyToken=require('../middleware/authJWT.js');


const app=express.Router();
app.post('/', login)
app.post('/signup', signup);

module.exports=app