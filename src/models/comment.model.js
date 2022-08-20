import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 30 },
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  thesis: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Thesis',
  },
  like: { type: Number, default: 0 },
  dislike: { type: Number, default: 0 },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
