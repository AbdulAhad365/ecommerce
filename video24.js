const express=require("express")
const jwt=require("jsonwebtoken")
const path=require("path")
const cookie_parser=require("cookie-parser")
const mongodbConnection=require("./config/mongooseConnection")
// const userModel=require("./models/userModel")
// const productModel=require("./models/productModel")
// const ownerModel=require("./models/ownerModel")

// now calling these files
const ownersRouter=require("./routes/ownersRouter")
const productsRouter=require("./routes/productRouter")
const usersRouter=require("./routes/userRouter")

const app=express()
mongodbConnection()

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(cookie_parser())

app.use("/owners",ownersRouter)
app.use("/products",productsRouter)
app.use("/users",usersRouter)



app.get('/',function(req,res){
    res.send("home")
})

app.listen(3000,()=>{
    console.log("listning at port 3000")
})