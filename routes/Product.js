const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("All products")
})
router.post('/',(req,res)=>{
    res.send("All products")
})
router.put('/',(req,res)=>{
    res.send("All products")
})
router.delete('/',(req,res)=>{
    res.send("All products")
})


module.exports = router