const express = require("express")
const checkFile = require("../helpers/multer")
const placeRoute = express.Router()
const findPlace = require("../controller/place")

placeRoute.get("/places" , findPlace)
module.exports = placeRoute