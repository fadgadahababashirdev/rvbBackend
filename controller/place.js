const places = require('../model/places');
const uploadToCloud = require('../helpers/cloudinary');

const findPlace = async (req, res) => {
  try {
    const fndPlace = await places.find();
    res.status(200).json({ status: 'success', fndPlace });
  } catch (error) {
    res.status(500).json({ status: 'failed', fndPlace });
  }
};
const createPlace = async (req, res) => {
  try {
    const filee = await uploadToCloud(req.file, res);
    const create = await places.create({
      placeName: req.body.placeName,
      placeImage: filee.secure_url,
    });
    res.status(200).json({ status: 'success', create });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
const getPlace = async (req, res) => {
  try {
    const place = await places.findById(req.params.id);
    res.status(200).json({ status: 'success', place });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

const updatePlace = async (req, res) => {
  try {
    if (req.file) {
      const fiile = await uploadToCloud(req.file, res);
      const update = await places.findByIdAndUpdate(req.params.id, {
        placeImage: fiile.secure_url,
        placeName: req.body.placeName,
      });
    } else {
      const update = await places.findByIdAndUpdate(req.params.id, {
        placeName: req.body.placeName,
      });
    }
    res.status(200).json({ status: 'updated successfully' });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

const delet = async(req,res)=>{
    try {
        const dele = await places.findByIdAndDelete(req.params.id)
        res.status(200).json({status:"success"})
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}
module.exports = { findPlace, createPlace, getPlace, updatePlace , delet};
