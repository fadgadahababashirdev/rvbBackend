const express=require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const app=express()
app.use(express.json())
app.use(cors())
require("dotenv").config()

// router
const router = require("./routes/userRoute")
app.use("/" , router)
app.get("/*" , (req,res)=>{
    res.send("could not find the router").json({message:error.message})
})

const con = async()=>{
    try {
        const conn = await mongoose.connect(process.env.database)
        console.log("connected to database successfully")
        app.listen(process.env.port,()=>console.log(`app running on port http://localhost:${process.env.port}`))

    } catch (error) {
        console.log(error)
    }
}
con()

