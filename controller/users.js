const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
  try {
    const genSal = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, genSal);
    const userExistence = await User.findOne({ email: req.body.email });
    if (!userExistence) {
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        phone: req.body.phone,
      });
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'user already exists' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const allUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ status: 'user could not found', message: error.message });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {}
};
const updateUser = async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate(req.params.id, {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });
    res.status(200).json({ message: 'user updated successfully', update });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const eraseUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'user deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
const authentication = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ status: 'failed', message: 'user not found' });
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(200).json({
        status: 'user logeed in successfully',
        token: jwt.sign({ userId: user._id }, process.env.mysecret, {
          expiresIn: '122days',
        }),
        user,
      });
    } else {
      res.status(404).json({ message: 'wrong credentials provided' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = {
  createUser,
  allUsers,
  getSingleUser,
  updateUser,
  
  deleteUser,
  authentication,
};
