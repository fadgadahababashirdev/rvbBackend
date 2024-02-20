const express = require('express');
const upload = require('../helpers/multer');

const {
  createTeam,
  getTeam,
  getSingleTeam,
  remake
} = require('../controller/team');

const teamRoute = express.Router();

teamRoute.get('/team', getTeam);
teamRoute.post('/addTeam', upload.single('memberImage'), createTeam);
teamRoute.get('/memberteam/:id', getSingleTeam);
teamRoute.put('/updatee/:id', upload.single('memberImage'), remake);

module.exports = teamRoute;
