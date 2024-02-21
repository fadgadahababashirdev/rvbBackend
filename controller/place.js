const placeModel = require("../model/places")
const uploadToCloud = require("../helpers/cloudinary")

const findPlace = async(req,res)=>{
    try {
         const fndPlace = await placeModel.find()
         res.status(200).json({status:"failed" , fndPlace})
    } catch (error) {
        res.status(500).json({status:"failed" , fndPlace})
    }
}

module.exports = findPlace