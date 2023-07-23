const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { cvService } = require('../services');

const createCv = catchAsync(async (req, res) => {
  const reqBody = { ...req.body, userId: req.user.id }
  const cv = await cvService.createCv(reqBody);
  res.status(httpStatus.CREATED).send(cv);
});

const getCvs = catchAsync(async (req, res) => {
  let filter = pick(req.query, ['search']);
  filter.userId = req.user.id; // only get the cv of the logged in user
  if (filter.search) {
    filter.search = {
      url: {
        $regex: filter.search,
        $options: 'i', // 'i' for case-insensitive search
      },
    };
  }
console.log(filter)
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await cvService.queryCvs(filter, options);
  res.send(result);
});

const getCv = catchAsync(async (req, res) => {
  const cv = await cvService.getCvById(req.params.cvId);
  if (!cv) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cv not found');
  }
  res.send(cv);
});

const updateCv = catchAsync(async (req, res) => {
  const cv = await cvService.updateCvById(req.params.cvId, req.body);
  res.send(cv);
});

const deleteCv = catchAsync(async (req, res) => {
  await cvService.deleteCvById(req.params.cvId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCv,
  getCvs,
  getCv,
  updateCv,
  deleteCv,
};
