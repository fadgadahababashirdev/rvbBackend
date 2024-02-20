// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({});

// const fileFilter = async (req, file, cb) => {
//     try {
//         const extensionName = path.extname(file.originalname).toLowerCase();
//         const allowedExtensions = ['.jpg', '.mp4', '.png', '.jpeg', '.svg', '.mpg', '.mp4'];
//         if (!allowedExtensions.includes(extensionName)) {
//             cb(new Error('Unsupported file format'), false);
//         }
//         cb(null, true);
//     } catch (error) {
//         console.log(error);
//         cb(error);
//     }
// };

// const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter
// });

// module.exports = upload;
const multer = require("multer")
const path = require("path")

const checkFile = multer({
    storage:multer.diskStorage({}),
    fileFilter:(req,file,cb)=>{
         const extension = path.extname(file.originalname).toLowerCase()
         const allowedExtensions = ['.jpg', '.jpeg' , '.png' , '.gif' , '.mpg' , '.mp4' , '.mpeg' ,'.svg']
         if(!allowedExtensions.includes(extension)){
            cb(new Error("unsupported file format"),false)
         }
         cb(null,true)
    }
})

module.exports = checkFile