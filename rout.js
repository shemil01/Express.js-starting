//download file 

const express = require("express")

const app = express()
const port = 3002
const path = require("path")

app.use(express.static(path.join(__dirname, 'public')))
app.get('/',(req,res)=>{
   
    res.sendFile(path.join(__dirname,'index.html'))
}),
app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,"public/images/ney.webp"))
})




app.listen(port,()=>{
    console.log(`app listening port:${port}`);
})