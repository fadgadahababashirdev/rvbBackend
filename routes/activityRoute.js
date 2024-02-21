const express = require("express")
const checkFile = require("../helpers/multer")
const {createActivity,getActivity ,getSingleActivity , updateActivity,removeActivity} = require("../controller/activity")
const activityRoute = express()

activityRoute.post("/createActivity" , checkFile.single("activityImage") , createActivity)
activityRoute.get("/getActivity" , getActivity)
activityRoute.get("/getActivityById/:id" , getSingleActivity)
activityRoute.put("/updateActivity/:id" , checkFile.single("activityImage") , updateActivity)
activityRoute.delete("/removeActivity/:id" ,removeActivity)


module.exports = activityRoute