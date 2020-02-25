const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    id: Number,
  },
  { timestamps: true }
);

const Author = mongoose.model('author', authorSchema);

module.exports = {
  authorSchema,
  Author,
};
