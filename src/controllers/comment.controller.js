const httpStatus = require('http-status');
const { tokenTypes } = require('../config/tokens');
const { Comment } = require('../models');
const { tokenService, userService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const create = catchAsync(async (req, res) => {
  const refreshTokenDoc = await tokenService.verifyToken(req.headers.authorization, tokenTypes.ACCESS);
  const user = await userService.getUserById(refreshTokenDoc.user);
  const createdAt = '2022/08/21';
  const { text, thesisId } = req.body;
  const comment = Comment.create({
    text,
    user: user._id,
    thesis: thesisId,
    createdAt,
  });
  res.status(httpStatus.CREATED).send({ comment });
});
