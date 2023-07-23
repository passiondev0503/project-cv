const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createCv = {
  body: Joi.object().keys({
    description: Joi.string().required(),
    url: Joi.string().required(),
  }),
};

const getCvs = {
  query: Joi.object().keys({
    search: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCv = {
  params: Joi.object().keys({
    cvId: Joi.string().custom(objectId),
  }),
};

const updateCv = {
  params: Joi.object().keys({
    cvId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      data: Joi.object(),
      metadata: Joi.object()
    })
    .min(1),
};

const deleteCv = {
  params: Joi.object().keys({
    cvId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCv,
  getCvs,
  getCv,
  updateCv,
  deleteCv,
};
