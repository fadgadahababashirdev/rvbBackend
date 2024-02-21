const Activity = require('../model/activities');
const uploadToCloud = require('../helpers/cloudinary');
const createActivity = async (req, res) => {
  try {
    const upload = await uploadToCloud(req.file, res);
    const activity = await Activity.create({
      activityName: req.body.activityName,
      activityImage: upload.secure_url,
    });
    res.status(200).json({ status: 'activity created', activity });
  } catch (error) {
    res
      .status(400)
      .json({ status: 'activity was not created', message: error.message });
  }
};

const getActivity = async (req, res) => {
  try {
    const seeActivity = await Activity.find();
    res.status(200).json({ status: 'success', seeActivity });
  } catch (error) {
    res.status(400).json({ status: 'failed', message: error.message });
  }
};

const getSingleActivity = async (req, res) => {
  try {
    const getActivity = await Activity.findById(req.params.id);
    res.status(200).json({ status: 'success', getActivity });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
const updateActivity = async (req, res) => {
  try {
    if (req.file) {
      const upload = await uploadToCloud(req.file, res);
      const updateActivity = await Activity.findByIdAndUpdate(req.params.id, {
        activityName: req.body.activityName,
        activityImage: upload.secure_url,
      });
    } else {
      const updateWithoutImage = await Activity.findByIdAndUpdate(
        req.params.id,
        {
          activityName: req.body.activityName,
        }
      );
    }
    res.status(200).json({ status: 'updated successfully' });
  } catch (error) {
    res.status(400).json({ status: 'not updated', message: error.message });
  }
};

const removeActivity = async(req,res)=>{
    try {
        const remove = await Activity.findByIdAndDelete(req.params.id)
        res.status(200).json({status:"Activity deleted successfully"})
    } catch (error) {
     res.status(500).json({status:"failed" , message:error.message})   
    }
}
module.exports = {
  createActivity,
  getActivity,
  getSingleActivity,
  updateActivity,
  removeActivity
};
