const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.send("this i am a product")
})

module.exports=router