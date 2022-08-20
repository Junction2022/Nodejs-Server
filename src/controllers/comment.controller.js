const httpStatus = require('http-status');
const { Comment, Thesis } = require('../models');
const catchAsync = require('../utils/catchAsync');

const create = catchAsync(async (req, res) => {
  const createdAt = '2022/08/21';
  const { text, thesisId } = req.body;
  const thesis = await Thesis.findOne({ _id: thesisId });

  const comment = await Comment.create({
    text,
    user: '63014446d0d781bcb1fbd70e',
    thesis: thesisId,
    createdAt,
  });

  thesis.comments.push(comment._id);
  await thesis.save();

  res.status(httpStatus.CREATED).send({ comment });
});

const addLike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findOne({ _id: id });
  comment.like += 1;
  await comment.save();
  res.status(httpStatus.OK).send({ comment });
});

const addDislike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findOne({ _id: id });
  comment.dislike += 1;
  await comment.save();
  res.status(httpStatus.OK).send({ comment });
});

module.exports = {
  create,
  addLike,
  addDislike,
};
