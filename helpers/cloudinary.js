
// module.exports = uploadToCloud;
const cloudinary = require('cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name:process.env.cloud_name,
  api_key:process.env.api_key,
  api_secret:process.env.api_secret,
});

const uploadToCloud = async (file, res) => {
  try {
    const response = await cloudinary.uploader.upload(file.path);
    return response;
  } catch (error) {
    return res.status(400).json({ status: 'failed', message: error.message });
  }
};

module.exports = uploadToCloud;
