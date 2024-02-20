const express = require('express');
const toursRoute = express.Router();
const checkFile = require('../helpers/multer');
const {
  createTour,
  getTour,
  getSingleTour,
  updateTour,
  removeTour
} = require('../controller/tours');
toursRoute.get('/tours', getTour);
toursRoute.post('/addTour', checkFile.single('tourImage'), createTour);
toursRoute.get('/tour/:id', getSingleTour);
toursRoute.put('/updateTour/:id', updateTour);
toursRoute.delete("/deleteTour/:id" , removeTour)

module.exports = toursRoute;
