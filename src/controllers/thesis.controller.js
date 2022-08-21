const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const thesisService = require('../services/thesis.service');

const getAll = catchAsync(async (req, res) => {
  const thesisList = await thesisService.getAllThesis();
  res.status(httpStatus.OK).send({ thesisList });
});

const getById = catchAsync(async (req, res) => {
  const thesis = await thesisService.getThesisById(req.params.id);
  res.status(httpStatus.OK).send({ thesis });
});

const create = catchAsync(async (req, res) => {
  const { title, file, language, topic, pageCount, author } = req.body;
  const thesis = await thesisService.createThesis(title, file, language, topic, pageCount, author);
  res.status(httpStatus.CREATED).send({ thesis });
});

const uploadFile = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send({ url: req.file.path });
});

module.exports = {
  getAll,
  getById,
  create,
  uploadFile,
};
