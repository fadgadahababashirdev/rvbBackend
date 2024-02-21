const express = require("express")
const checkFile = require("../helpers/multer")

const findPlace = require("../controller/place")
const placeRoute = express.Router()
placeRoute.get("/places" , findPlace)

module.exports = placeRoute