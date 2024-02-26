const Booking = require("../model/booking")

const createBooking = async(req,res)=>{
    try {
        const create = await Booking.create({
            fullName:req.body.fullName,
            email:req.body.email,
            phone:req.body.phone,
            numberOfPeople:req.body.numberOfPeople,
            date:req.body.date,
            // message:req.body.message

        })

        res.status(200).json({status:"new booking has been made" ,create})
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}
const bookings = async(req,res)=>{
    try {
        const books = await Booking.find()
        res.status(200).json({status:"success the bookings are found",books})
    } catch (error) {
        res.status(500).json({status:"could not find the user" , message:error.message})
    }
}
const singleBooking = async(req,res)=>{
    try {
        const single = await Booking.findById(req.params.id)
        res.status(200).json({status:"user found id " , single})
    } catch (error) {
        res.status(500).json({status:"failed to get the user" , message:error.message})
    }
}

const removeBook = async(req,res)=>{
    try {
        const remove = await Booking.findByIdAndDelete(req.params.id)
        res.status(200).json({status:"user deleted successfully"})
    } catch (error) {
        res.status(500).json({status:"the user could not be deleted" , message:error.messge})
    }
}
const updateBooking = async(req,res)=>{
    try {
        const updateBook = await Booking.findByIdAndUpdate(req.params.id , {
            fullName:req.body.fullName,
            email:req.body.email,
            phone:req.body.phone,
            numberOfPeople:req.body.numberOfPeople,
            date:req.body.date , 
            // message:req.body.message
        })
        res.status(200).json({status:"updated successfully"})
    } catch (error) {
        res.status(500).json({status:"failed to update" , message:error.message})
    }
}
module.exports = {createBooking , bookings , singleBooking , removeBook ,updateBooking} 