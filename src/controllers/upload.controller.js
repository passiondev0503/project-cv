const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { uploadService } = require('../services');

const createUpload = catchAsync(async (req, res) => {
  const upload = await uploadService.createUpload(req.user.id, req.files);
  res.status(httpStatus.CREATED).send(upload);
});

const getUploads = catchAsync(async (req, res) => {
  let filter = pick(req.query, ['name']);
  if (filter.name) {
    filter.name = { $regex: new RegExp(filter.name, "i") };
  }
  filter = { ...filter, userId: req.user.id };
  
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await uploadService.queryUploads(filter, options);
  res.send(result);
});


const getUpload = catchAsync(async (req, res) => {
  const upload = await uploadService.getUploadById(req.params.uploadId);
  if (!upload) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Upload not found');
  }
  res.send(upload);
});

const deleteUpload = catchAsync(async (req, res) => {
  await uploadService.deleteUploadById(req.params.uploadId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUpload,
  getUploads,
  getUpload,
  deleteUpload,
};
