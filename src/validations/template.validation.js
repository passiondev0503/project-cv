const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createTemplate = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    metadata: Joi.object().required(),
  }),
};

const getTemplates = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTemplate = {
  params: Joi.object().keys({
    templateId: Joi.string().custom(objectId),
  }),
};


const updateTemplate = {
  params: Joi.object().keys({
    templateId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().trim(),
      metadata: Joi.object(),
    })
    .min(1),
};

module.exports = {
  createTemplate,
  getTemplates,
  getTemplate,
  updateTemplate
};
