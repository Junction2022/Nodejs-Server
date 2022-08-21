const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const thesisSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  file: {
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
    type: Number,
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
  viewCount: {
    type: Number,
    default: 0,
  },
  downloadCount: {
    type: Number,
    default: 0,
  },
  exportCount: {
    type: Number,
    default: 0,
  },
  comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
});

thesisSchema.plugin(toJSON);
thesisSchema.plugin(paginate);

const Thesis = mongoose.model('Thesis', thesisSchema);

module.exports = Thesis;
