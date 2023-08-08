const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { templateService } = require('../services');

const createTemplate = catchAsync(async (req, res) => {
  const template = await templateService.createTemplate(req.body);
  res.status(httpStatus.CREATED).send(template);
});

const getTemplates = catchAsync(async (req, res) => {
  let filter = pick(req.query, ['name']);
  if (filter.name) {
    filter.name = { $regex: new RegExp(filter.name, "i") };
  }
  filter = { ...filter };
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await templateService.queryTemplates(filter, options);
  res.send(result);
});

const getTemplate = catchAsync(async (req, res) => {
  let template = await templateService.getTemplateById(req.params.templateId);
  if (!template) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Template not found');
  }
  res.send(template);
});

const updateTemplate = catchAsync(async (req, res) => {
  let template = await templateService.updateTemplateById(req.params.templateId, req.body);
  res.send(template);
});

module.exports = {
  createTemplate,
  getTemplates,
  getTemplate,
  updateTemplate,
};
