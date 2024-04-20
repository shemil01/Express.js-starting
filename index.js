const express = require('express')
const app = express()
const port = 3005

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/product', (err, client) => {
  if (err) throw err

  const db = client.db('product')

  db.collection('productDt').find().toArray((err, result) => {
    if (err) throw err

    console.log(result)
  })
})
app.get('/',(req,res)=>{
    res.send('heello ')
    res.end()
})
app.listen(port,()=>{
    console.log(`you app running port: ${port}`);
})