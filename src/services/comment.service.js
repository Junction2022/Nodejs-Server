const { Comment, Thesis } = require('../models');

const createComment = async (text, thesisId) => {
  const userId = '63014446d0d781bcb1fbd70e';
  const createdAt = Date.now();
  const thesis = await Thesis.findOne({ _id: thesisId });
  const comment = await Comment.create({
    text,
    user: userId,
    thesis: thesisId,
    createdAt,
  });
  thesis.comments.push(comment._id);
  await thesis.save();
  return comment;
};

module.exports = {
  createComment,
};
