const express = require('express')
const router = express.Router()



router.get('/',(req,res)=>{
    res.send("User Form")
})
router.post('/',(req,res)=>{
    res.send("User Form")
})
router.put('/',(req,res)=>{
    res.send("User Form")
})
router.delete('/',(req,res)=>{
    res.send("User Form")
})

module.exports = router