const multer = require('multer');
const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const uploadValidation = require('../../validations/upload.validation');
const uploadController = require('../../controllers/upload.controller');
const imageFileFilter = (req, file, cb) => {
    const allowedMimeTypes = /\.(jpg|jpeg|png|gif|svg|webp)$/i;
    
    if (file.mimetype.match(allowedMimeTypes)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only JPEG, PNG, GIF, SVG, and WebP are allowed!'), false);
    }
};
const upload = multer({ fileFilter: imageFileFilter });
const router = express.Router();

router
    .route('/')
    .post(auth('manageUploads'), upload.array('files'), uploadController.createUpload)
    .get(auth('getUploads'), validate(uploadValidation.getUploads), uploadController.getUploads);

router
    .route('/:uploadId')
    .delete(auth('manageUploads'), validate(uploadValidation.deleteUpload), uploadController.deleteUpload);

module.exports = router;