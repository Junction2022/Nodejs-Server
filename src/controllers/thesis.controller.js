const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { Thesis } = require('../models');

const getAll = catchAsync(async (req, res) => {
  const thesisList = await Thesis.find({}).sort({ createdAt: 'desc' });
  res.status(httpStatus.OK).send({ thesisList });
});

const getById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const thesis = await Thesis.findOne({ _id: id }).populate({
    path: 'comments',
    populate: {
      path: 'user',
    },
  });
  res.status(httpStatus.OK).send({ thesis });
});

const create = catchAsync(async (req, res) => {
  const { title, file, language, topic, pageCount, author } = req.body;
  const createdAt = '2022/08/21';
  const hash = '.....';
  const thesis = await Thesis.create({ title, hash, language, topic, pageCount, author, createdAt });
  res.status(httpStatus.CREATED).send({ thesis });
});

module.exports = {
  getAll,
  getById,
  create,
};
