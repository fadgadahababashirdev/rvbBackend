const express = require('express');
const toursRoute = express.Router();
const checkFile = require('../helpers/multer');
const {
  createTour,
  getTour,
  getSingleTour,
  removeTour,
  updatee,
} = require('../controller/tours');
toursRoute.get('/tours', getTour);
toursRoute.post('/addTour', checkFile.single('tourImage'), createTour);
toursRoute.get('/tour/:id', getSingleTour);
toursRoute.delete('/deleteTour/:id', removeTour);
toursRoute.put('/updateee/:id', checkFile.single('tourImage'), updatee);

module.exports = toursRoute;
