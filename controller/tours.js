const Tours = require('../model/tours');
const uploadToCloud = require('../helpers/cloudinary');

const createTour = async (req, res) => {
  try {
    const uploadFile = await uploadToCloud(req.file, res);
    console.log(uploadFile);
    const create = await Tours.create({
      heading: req.body.heading,
      tourImage: uploadFile.secure_url,
      tourDescription: req.body.tourDescription,
    });
    res.status(200).json(create);
  } catch (error) {
    res.status(500).json({ status: 'failed' });
  }
};

const getTour = async (req, res) => {
  try {
    const tours = await Tours.find();
    res.status(200).json({ message: 'success', tours });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleTour = async (req, res) => {
  try {
    const getTour = await Tours.findById(req.params.id);
    res.status(200).json({ status: 'success', getTour });
  } catch (error) {
    res.status(400).json({ status: 'failes', message: error.message });
  }
};

const updateTour = async (req, res) => {
  try {
    if (req.file) {
      const upload = await uploadToCloud(req.file, res);
      const update = await Tours.findByIdAndUpdate(req.params.id, {
        heading: req.body.heading,
        tourImage: upload.secure_url,
        tourDescription: req.body.tourDescription,
      })
       res.status(200).json({messag:"updated Successfully" , update})
    }
    else{
        const update = await Tours.findByIdAndUpdate(req.params.id , {
            heading:req.body.heading,
            tourDescription:req.body.tourDescription
        })
        res.status(200).json({message:"updated Successfully" , update})
    }

  } catch (error) {
    res.status(500).json({status:"failed to update",message:error.message})
  }
};

const removeTour = async(req,res)=>{
    try {
        await Tours.findByIdAndDelete(req.params.id)
        res.status(200).json({status:"tour Deleted successfully"})
    } catch (error) {
        res.status(500).json({status:"failes" , message:error.message})
    }
}
module.exports = { createTour, getTour, getSingleTour , updateTour , removeTour};
