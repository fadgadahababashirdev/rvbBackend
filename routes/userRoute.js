const express = require('express');
const router = express.Router();
require("dotenv").config()
const {
  createUser,
  allUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  authentication
} = require('../controller/users');

router.post('/createUser', createUser);
router.get('/users', allUsers);
router.get('/user/:id', getSingleUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id',deleteUser)
router.post("/Login" , authentication)

module.exports = router;
