const AWS = require('aws-sdk');
const httpStatus = require('http-status');
const { Upload } = require('../models');
const ApiError = require('../utils/ApiError');
const config = require('../config/config');

// Set up AWS
AWS.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region,
});
const s3 = new AWS.S3();

/**
 * Create a upload
 * @param {Array} files
 * @returns {Promise<Upload>}
 */
const createUpload = async (userId, files) => {

  const uploads = [];
  // Iterate through files array and upload files to S3
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Configure parameters for S3 upload
    const params = {
      Bucket: config.aws.bucketName,
      Key: `${Date.now().toString()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype
    };

    // Upload file to S3 and await the response
    const response = await s3.upload(params).promise();

    const _upload = {
      userId,
      name: file.originalname,
      contentType: file.mimetype,
      key: params.Key,
    }
    // At this point, the file has been uploaded to S3, and response.Location contains the URL
    const mongoResponse = await Upload.create(_upload);

    const URL = await s3.getSignedUrl('getObject', {
      Bucket: 'project-cv-new',
      Key: params.Key,
      Expires: Number(config.aws.bucketExpires), // time to expire in seconds
    });

    uploads.push({
      _id: mongoResponse._id,
      name: file.originalname,
      contentType: file.mimetype,
      url: URL,
      expires: Number(config.aws.bucketExpires),
    })
    // If you want to return all uploads after the loop, you can push them to an array and return that
  }

  // Or if you want to return the most recent upload:
  return uploads;
};


/**
 * Query for uploads
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUploads = async (filter, options) => {
  const uploads = await Upload.paginate(filter, options);
  uploads.results = uploads.results.map((upload) => {

    const url = s3.getSignedUrl('getObject', {
      Bucket: config.aws.bucketName,
      Key: upload.key,
      Expires: Number(config.aws.bucketExpires)
    });

    return {
      _id: upload._id,
      url,
      expires: Number(config.aws.bucketExpires),
      name: upload.name,
      contentType: upload.contentType,
    }
  });

  return uploads;
};

/**
 * Get upload by id
 * @param {ObjectId} id
 * @returns {Promise<Upload>}
 */
const getUploadById = async (id) => {
  return Upload.findById(id);
};

/**
 * Delete upload by id
 * @param {ObjectId} uploadId
 * @returns {Promise<Upload>}
 */
const deleteUploadById = async (uploadId) => {
  const upload = await getUploadById(uploadId);
  if (!upload) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Upload not found');
  }
  const params = {
    Bucket: config.aws.bucketName,
    Key: upload.key,
  };

  await s3.deleteObject(params).promise();
  await upload.remove();
  return upload;
};

module.exports = {
  createUpload,
  queryUploads,
  getUploadById,
  deleteUploadById,
};
