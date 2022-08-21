const httpStatus = require('http-status');
const { Comment } = require('../models');
const catchAsync = require('../utils/catchAsync');
const commentService = require('../services/comment.service');

const create = catchAsync(async (req, res) => {
  const { text, thesisId } = req.body;
  const comment = commentService.createComment(text, thesisId);
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
