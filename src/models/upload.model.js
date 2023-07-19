const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const uploadSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    contentType: {
      type: String,
      required: true,
      trim: true,
    },
    key: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
uploadSchema.plugin(toJSON);
uploadSchema.plugin(paginate);

/**
 * @typedef Upload
 */
const Upload = mongoose.model('Upload', uploadSchema);

module.exports = Upload;
