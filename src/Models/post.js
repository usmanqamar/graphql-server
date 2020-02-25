const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    category: String,
    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'author',
    },
    _id: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

const Post = mongoose.model('post', postSchema);

exports = {
  postSchema,
  Post,
};
