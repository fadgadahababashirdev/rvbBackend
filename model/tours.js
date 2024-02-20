const mongoose =require("mongoose")
const tours = mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    tourImage:{
        type:String,
        required:true
    },
    tourDescription:{
        type:String,
        required:true,
    
    }
})

module.exports = mongoose.model("tour" , tours)
