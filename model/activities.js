const mongoose = require("mongoose")
const activities = mongoose.Schema({
    activityName:{
        type:String,
        required:true
    },
    activityImage:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("activity" , activities)