const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const cvSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    cv: {
      type: Object,
      required: true,
    },
    url: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
cvSchema.plugin(toJSON);
cvSchema.plugin(paginate);


/**
 * @typedef Cv
 */
const Cv = mongoose.model('Cv', cvSchema);

module.exports = Cv;
