const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
// user router
const router = require('./routes/userRoute');
app.use('/', router);

// experience Router
// const experienceRouter = require("./routes/experienceRoute")
// app.use("/",experienceRouter)

// toursRouter
const tourRoute = require('./routes/toursRoute');
app.use('/', tourRoute);

// team Route
const teamRoute = require('./routes/teamRoute');
app.use('/', teamRoute);
// activity Route
const activityRoute = require('./routes/activityRoute');
app.use('/', activityRoute);
// bookingRouter
const booking = require('./routes/bookingRoute');
app.use('/', booking);

// contact Router
const contactRouter = require('./routes/contact');
app.use('/', contactRouter);

// placeRouter
const placeRoute = require('./routes/placeRoute');
app.use("/" , placeRoute)

app.get('/*', (req, res) => {
  res.send('could not find the router');
});

const con = async () => {
  try {
    const conn = await mongoose.connect(process.env.database);
    console.log('connected to database successfully');
    app.listen(process.env.port, () =>
      console.log(`app running on port http://localhost:${process.env.port}`)
    );
  } catch (error) {
    console.log(error);
  }
};


con();
