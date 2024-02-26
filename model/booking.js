const mongoose = require("mongoose")
const Booking = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    numberOfPeople:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
    },
    // message:{
    //     type:String,
    //     required:false
    // },
    createdAt:{
        type:date,
        default:Date.now
    }
})

module.exports = mongoose.model("booking" , Booking)