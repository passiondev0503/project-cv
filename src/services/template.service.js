const httpStatus = require('http-status');
const { Template } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a template
 * @param {Object} templateBody
 * @returns {Promise<Template>}
 */
const createTemplate = async (templateBody) => {
  return Template.create(templateBody);
};

/**
 * Query for templates
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTemplates = async (filter, options) => {
  const templates = await Template.paginate(filter, options);
  return templates;
};

/**
 * Get template by id
 * @param {ObjectId} id
 * @returns {Promise<Template>}
 */
const getTemplateById = async (id) => {
  return Template.findById(id);
};

/**
 * Update template by id
 * @param {ObjectId} templateId
 * @param {Object} updateBody
 * @returns {Promise<Template>}
 */
const updateTemplateById = async (templateId, updateBody) => {
  const template = await getTemplateById(templateId);
  if (!template) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Template not found');
  }
  Object.assign(template, updateBody);
  await template.save();
  return template;
};


module.exports = {
  createTemplate,
  queryTemplates,
  getTemplateById,
  updateTemplateById,
};
