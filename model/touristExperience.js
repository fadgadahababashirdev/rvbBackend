const touristExperience = require("../model/touristExperience");
const uploadToCloud = require("../helpers/cloudinary");

const addExperience = async (req, res) => {
    try {
        const uploadFilesPromises = [];
        // Upload each file and store the promises in an array
        ['file', 
        'imageOneAtAplace', 
        'imageTwoAtAplace', 
        'imageThreeAtAplace',
         'imageFourAtAplace', 
         'imageFiveAtAplace', 
         'imageSixAtAplace', 
         'theVideoOfTheFirtsPlaceWhereHeWent', 
         'theVideoOfTheSecondPlaceWhereHeWent',
         'theVideoOfTheThirdPlaceWhereHeWent',
         'theVideoOfTheFourthPlaceWhereHeWent', // Corrected field name
         'theVideoOfTheFifthPlaceWhereHeWent' // Corrected field name
        ]
            .forEach(field => {
                if (req.body[field]) {
                    uploadFilesPromises.push(uploadToCloud(req.body[field], res));
                }
            });

        // Wait for all files to upload
        const uploadedFiles = await Promise.all(uploadFilesPromises);

        // Create an object containing the uploaded file URLs
        const uploadedUrls = {};
        uploadedFiles.forEach((uploadFile, index) => {
            uploadedUrls[fieldNames[index]] = uploadFile.secure_url;
        });

        // Create the experience with uploaded file URLs
        const experience = await touristExperience.create({
            image: uploadedUrls.file,
            touristNames: req.body.touristNames,
            touristParagraph: req.body.touristParagraph,
            experience: req.body.experience,
            imageOneAtAplace: uploadedUrls.imageOneAtAplace,
            imagePlaceHeadingOne: req.body.imagePlaceHeadingOne,
            imageOneLikedMore: req.body.imageOneLikedMore,
            imageTwoAtAplace: uploadedUrls.imageTwoAtAplace,
            imagePlaceHeadingTwo: req.body.imagePlaceHeadingTwo,
            imageTwoLikedMore: req.body.imageTwoLikedMore,
            // Repeat for other fields...
            expectations: req.body.expectations,
            overView: req.body.overView
        });

        res.status(201).json({ status: "success", experience });
    } catch (error) {
        res.status(400).json({ status: "failed", message: error.message });
    }
};

const getExperience = async (req, res) => {
    try {
        const experiences = await touristExperience.find();
        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addExperience, getExperience };
