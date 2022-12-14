const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// cloudinary.config({
//     cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET
// });
cloudinary.config({ 
    cloud_name: 'dkxsz0e4u', 
    api_key: '752294891838872', 
    api_secret: 'b9o-rX64Dp3qAir8Uorf7hYKYdQ' 
  });
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'HungerMania'
    },
    allowedFormats: ['jpeg', 'png', 'jpg']
});

module.exports = {
    cloudinary,
    storage
}