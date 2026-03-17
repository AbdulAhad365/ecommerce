const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.send("this i am a owner")
})
// console.log(process.env.node
// _env)

module.exports=router