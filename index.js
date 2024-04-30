const e = require('express')
const express = require('express')
const app = express()
const port = 3006


app.get('/profail',Token,Validation,(req,res)=>{
  res.send("successs")
  console.log('user loged');
})
function Token(req,res,next){
  console.log('token creating');
  setInterval(()=>{
const TOKEN =123
req.token = Token
next()
  },1000)
}

function Validation(req,res,next){
if(req.token){
  console.log('token approved');
  next()
}

}

app.listen(port,()=>{
  console.log(`yor app is listening on port:${port}`);
})