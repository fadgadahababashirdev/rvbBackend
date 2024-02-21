const express = require('express');
const contactRouter = express.Router();
const {
  findContact,
  createContactUs,
  getSingleContact,
  updateContact,
} = require('../controller/conta');
contactRouter.get('/contacts', findContact);
contactRouter.post('/contact', createContactUs);
contactRouter.get('/contact/:id', getSingleContact);
contactRouter.put('/contact/:id', updateContact);

module.exports = contactRouter;
