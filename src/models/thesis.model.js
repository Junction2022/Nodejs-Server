const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const thesisSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  hash: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  pageCount: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

thesisSchema.plugin(toJSON);
thesisSchema.plugin(paginate);

const Thesis = mongoose.model('Thesis', thesisSchema);

module.exports = Thesis;
