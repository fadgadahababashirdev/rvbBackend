const express = require("express")
const bookingRouter = express()
const {createBooking , bookings , singleBooking ,removeBook,updateBooking}=require("../controller/bookings")

bookingRouter.post("/book" , createBooking)
bookingRouter.get("/bookings" , bookings)
bookingRouter.get("/book/:id" , singleBooking)
bookingRouter.delete("/book/:id" , removeBook)
bookingRouter.put("/updateBook/:id", updateBooking)
module.exports = bookingRouter