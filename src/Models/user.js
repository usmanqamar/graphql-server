const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: Number,
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    lastSurveyDate: Date,
    lastSurveyResult: Number,
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = {
  userSchema,
  User,
};
