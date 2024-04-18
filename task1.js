const express = require('express')

const app = express()
const port= 3003
const path = require('path')
const productRouter = require('./routes/Product')
const userRouter = require('./routes/User')

app.use('/product',productRouter)
app.use('/user',userRouter)



app.listen(port,()=>{
    console.log(`your app is running port:${port}`)
})