const contact = require('../model/contact');
const sendEmail = require('../helpers/sendEmail');
const createContactUs = async (req, res) => {
  try {
    const create = await contact.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      message: req.body.message,
    });
    sendEmail(
      '"RwandaVentures" <fadgadahababshirdev@gmail.com>',
      req.body.email,
      "This is a test"
      ,
      `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <h1>Thank you for reaching out to us we are reviewing your message and we shall get back to you as soon as possible<h1>
    </body>
    </html>
    `
    );
    res.status(200).json({ status: 'user created successfully', create });
  } catch (error) {
    res
      .status(500)
      .json({ status: 'failed to create user', message: error.message });
  }
};
const getSingleContact = async (req, res) => {
  try {
    const singleContact = await contact.findById(req.params.id);
    res.status(200).json({ status: 'success', singleContact });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
const findContact = async (req, res) => {
  try {
    const contacts = await contact.find();
    res.status(200).json({ status: 'success', contacts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const update = await contact.findByIdAndUpdate(req.params.id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });
    res.status(200).json({ status: 'updated successfully' });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
const deleteContact = async (req, res) => {
  try {
    const deleteUser = await contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 'successfully deleted' });
  } catch (error) {
    res
      .status(500)
      .json({ status: 'deleting contact refused', message: error.message });
  }
};
module.exports = {
  findContact,
  createContactUs,
  getSingleContact,
  updateContact,
  deleteContact,
};
