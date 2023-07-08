const httpStatus = require('http-status');
const { Cv } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a cv
 * @param {Object} cvBody
 * @returns {Promise<Cv>}
 */
const createCv = async (cvBody) => {
  return Cv.create(cvBody);
};

/**
 * Query for cvs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCvs = async (filter, options) => {
  const cvs = await Cv.paginate(filter, options);
  return cvs;
};

/**
 * Get cv by id
 * @param {ObjectId} id
 * @returns {Promise<Cv>}
 */
const getCvById = async (id) => {
  return Cv.findById(id);
};


/**
 * Update cv by id
 * @param {ObjectId} cvId
 * @param {Object} updateBody
 * @returns {Promise<Cv>}
 */
const updateCvById = async (cvId, updateBody) => {
  const cv = await getCvById(cvId);
  if (!cv) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cv not found');
  }

  Object.assign(cv, updateBody);
  await cv.save();
  return cv;
};

/**
 * Delete cv by id
 * @param {ObjectId} cvId
 * @returns {Promise<Cv>}
 */
const deleteCvById = async (cvId) => {
  const cv = await getCvById(cvId);
  if (!cv) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cv not found');
  }
  await cv.remove();
  return cv;
};

module.exports = {
  createCv,
  queryCvs,
  getCvById,
  updateCvById,
  deleteCvById,
};
