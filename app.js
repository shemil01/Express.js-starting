const { error } = require("console")
const express = require("express")

const app = express()
const port = 3000

app.listen(port,(error)=>{
    if(!error){
        console.log("your app is successfully running,your app listening port"+port)
    }else{
        console.log("error occured,server can't start",error)
    }
})