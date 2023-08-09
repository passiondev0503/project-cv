const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const templateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    metadata: {
      type: Object,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
templateSchema.plugin(toJSON);
templateSchema.plugin(paginate);

/**
 * @typedef Template
 */
const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
