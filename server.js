const express=require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const app=express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
app.use(express.urlencoded({ extended: false}));
// user router
const router = require("./routes/userRoute")
app.use("/" , router)

// experience Router
// const experienceRouter = require("./routes/experienceRoute")
// app.use("/",experienceRouter)

// toursRouter
const tourRoute = require("./routes/toursRoute")
app.use("/" , tourRoute)


// team Route
const teamRoute = require("./routes/teamRoute")
app.use("/" , teamRoute)


app.get("/*" , (req,res)=>{
    res.send("could not find the router").json({message:error.message})
})
const con = async()=>{
    try {
        const conn = await mongoose.connect(process.env.database)
        console.log("connected to database successfully")
        app.listen(process.env.port,()=>console.log(`app running on port http://localhost:${process.env.port}`))

    } catch (error) {
        console.log("db not connected")
    }
}
con()

