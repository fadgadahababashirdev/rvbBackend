const mongoose =require("mongoose")
const tours = mongoose.Schema({
    heading:{
        type:String
        
    },
    tourImage:{
        type:String
        
    },
    tourDescription:{
        type:String
        
    
    }
})

module.exports = mongoose.model("tour" , tours)
