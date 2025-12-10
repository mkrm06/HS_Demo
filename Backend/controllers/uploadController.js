const asyncHandler = require('express-async-handler');
const cloudinary = require('../config/cloudinary');

exports.uploadImage = asyncHandler(async (req, res) => {
  // multer memory storage gives buffer in req.file.buffer
  if (!req.file) {
    res.status(400);
    throw new Error('No file uploaded');
  }
  const streamifier = require('streamifier');

  const uploadFromBuffer = (buffer) =>
    new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream({ folder: 'myapp' }, (error, result) => {
        if (result) resolve(result);
        else reject(error);
      });
      streamifier.createReadStream(buffer).pipe(stream);
    });

  const result = await uploadFromBuffer(req.file.buffer);
  res.json({ url: result.secure_url, public_id: result.public_id });
});
