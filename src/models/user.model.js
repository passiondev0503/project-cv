const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const userSchema = mongoose.Schema(
  {
    photoUploadId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Upload',
    },
    socialId: {
      type: String,
      unique: true,
      trim: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    websiteUrl: {
      type: String,
      trim: true,
    },
    linkedinUrl: {
      type: String,
      trim: true,
    },
    twitterUrl: {
      type: String,
      trim: true,
    },
    youtubeUrl: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    /**
     * alternativeEmail field is used to store a user's email when they're trying to create an account using a social account, 
     * but the email they're using is already registered with another account. In such cases, the email is stored in the alternativeEmail field.
     * @property {string} alternativeEmail - The alternative email of the user. 
     */
    alternativeEmail: {
      type: String,
      trim: true,
      lowercase: true
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!this.socialId && !validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    password: {
      type: String,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!this.socialId && (!value.match(/\d/) || !value.match(/[a-zA-Z]/))) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
      private: true, // used by the toJSON plugin
    },
    role: {
      type: String,
      enum: roles,
      default: 'user',
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    defaultTemplateId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Template',
    }
  },
  {
    timestamps: true,
  }
);

//alterantiveEmail
/*
alternative email is used to save a users email, when they're trying to create an account with a social account,
but the email they're using is already in use by another account..... so we save the email in the alternativeEmail field..
*/

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
