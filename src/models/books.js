const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: Number,
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

const Book = mongoose.model('book', bookSchema);

module.exports = {
  bookSchema,
  Book,
};
