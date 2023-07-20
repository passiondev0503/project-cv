const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUpload = Joi.object({
  files: Joi.array().items(
    Joi.object({
      mimetype: Joi.string().valid(
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/gif',
        'image/svg+xml',
        'image/webp').required(),
    }).unknown(true)  // Allow other fields, you may need to adjust this
  ).required()
}).unknown(true);  // Allow other fields, you may need to adjust this


const getUploads = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUpload = {
  params: Joi.object().keys({
    uploadId: Joi.string().custom(objectId),
  }),
};


const deleteUpload = {
  params: Joi.object().keys({
    uploadId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUpload,
  getUploads,
  getUpload,
  deleteUpload,
};
