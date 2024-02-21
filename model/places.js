const mongoose = require("mongoose")
const places = mongoose.Schema({
    placeName:{
        type:String,
        required:true
    },
    placeImage:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("place" , places)