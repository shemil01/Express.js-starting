const { error } = require("console")
const express = require("express")

const path=require("path")
const app = express()
const port = 3001

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
}),

app.get("/product",(req,res)=>{
    res.sendFile(path.join(__dirname,"product.html"))
}),
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"about.html"))
})

app.listen(port,(error)=>{
    if(!error){
        console.log("your app is successfully running,your app listening port"+port)
    }else{
        console.log("error occured,server can't start",error)
    }
})