const multer = require('multer');
const upload = multer();  // configure multer as needed
const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const uploadValidation = require('../../validations/upload.validation');
const uploadController = require('../../controllers/upload.controller');

const router = express.Router();

router
    .route('/')
    .post(auth('manageUploads'), upload.array('files'), uploadController.createUpload)
    .get(auth('getUploads'), validate(uploadValidation.getUploads), uploadController.getUploads);

router
    .route('/:uploadId')
    .delete(auth('manageUploads'), validate(uploadValidation.deleteUpload), uploadController.deleteUpload);

module.exports = router;