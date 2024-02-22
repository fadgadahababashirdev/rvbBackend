const express = require("express")
const checkFile = require("../helpers/multer")

const {findPlace,createPlace , getPlace , updatePlace ,delet} = require("../controller/place")
const placeRoute = express.Router()
placeRoute.get("/places" , findPlace)
placeRoute.post("/place" , checkFile.single("placeImage"), createPlace)
placeRoute.get("/place/:id" , getPlace)
placeRoute.put("/place/:id" , checkFile.single("placeImage") , updatePlace)
placeRoute.delete("/place/:id" , delet)

module.exports = placeRoute