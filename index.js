var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var cors=require('cors');
require('dotenv').config();

var loginRouter=require('./routes/loginRouter.js');
var classRouter=require('./routes/classRouter.js');

const app=express();

app.use(bodyParser.json({limit:'50mb', extended:'true'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended:'true'}));

app.use(cors());
app.get('/', (req, res)=>{res.status(200).send('hello')})
app.use('/login', loginRouter);
app.use('/class',classRouter);


const PORT=process.env.PORT||5000;
const CONNECTION_URL=process.env.CONNECTION_URL;
console.log(CONNECTION_URL)
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=>console.log(`Server Running on Port: ${PORT}`)))
.catch((error)=>console.log(error));