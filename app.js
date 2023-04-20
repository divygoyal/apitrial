const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config({path:'./.env'})
require('./Db/Conn')


const PORT = process.env.PORT;

const User = require('./UserSchema');
const { json } = require('express');


const middleware =(req,res,next)=>{
    console.log("middleware mf");
    next();
}
app.use(cookieParser());
app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://msildg.onrender.com');
  next();
});

console.log("hello");
app.use((require('./router/Auth')));
// app.use((require('./router/Auth')))

// app.get('/signin' , (req,res)=>{
//     res.send('hello');
// })

app.get('/register' , middleware , (req,res)=>{
    res.send('hello');
})
app.get('/contact' , (req,res)=>{
    res.send('hello');
})

app.listen(PORT,()=>{
    console.log(`running on ${PORT}`)
})
