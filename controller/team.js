const Team = require('../model/team');
const uploadToCloud = require('../helpers/cloudinary');
const createTeam = async (req, res) => {
  try {
    const upload = await uploadToCloud(req.file, res);
    const create = await Team.create({
      memberImage: upload.secure_url,
      name: req.body.name,
      title: req.body.title,
      description: req.body.description,
    });
    res.status(201).json({ status: 'new user created successfully', create });
  } catch (error) {
    res
      .status(500)
      .json({ status: 'failed to create a new user', message: error.message });
  }
};
const getTeam = async (req, res) => {
  try {
    const findTeam = await Team.find();
    res.status(200).json(findTeam);
  } catch (error) {
    res.status(500).json({
      status: 'failed , could not find the users',
      message: error.message,
    });
  }
};
const getSingleTeam = async (req, res) => {
  try {
    const singleTeam = await Team.findById(req.params.id);
    res.status(200).json({ status: 'success', singleTeam });
  } catch (error) {
    res.status(500).json({ status: 'The user could not be found' });
  }
};

const remake = async (req, res) => {
  try {
    if (req.file) {
      const upload = await uploadToCloud(req.file, res);
      const update = await Team.findByIdAndUpdate(req.params.id, {
        memberImage: upload.secure_url,
        title: req.body.title,
        name: req.body.name,
        description: req.body.description,
      });
    } else {
      const update = await Team.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        name: req.body.name,
        description: req.body.description,
      });
    }
    res.status(200).json({ status: 'data successfully updated' });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

const removee = async (req, res) => {
  try {
    const erase = await Team.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 'successfully deleted' });
  } catch (error) {
    res
      .status(500)
      .json({ status: 'could not delete member', message: error.message });
  }
};

module.exports = { createTeam, getTeam, getSingleTeam, remake, removee };
