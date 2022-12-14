const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const thesisService = require('../services/thesis.service');

const getAll = catchAsync(async (req, res) => {
  // TODO : Connect with BlockChain Server
  const thesisList = await thesisService.getAllThesis();
  res.status(httpStatus.OK).send({ thesisList });
});

const getById = catchAsync(async (req, res) => {
  // TODO : Connect with BlockChain Server
  const thesis = await thesisService.getThesisById(req.params.id);
  res.status(httpStatus.OK).send({ thesis });
});

const create = catchAsync(async (req, res) => {
  // TODO : Connect with BlockChain Server
  const { title, file, language, topic, pageCount, author } = req.body;
  const thesis = await thesisService.createThesis(title, file, language, topic, pageCount, author);
  res.status(httpStatus.CREATED).send({ thesis });
});

const uploadFile = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send({ url: req.file.filename });
});

module.exports = {
  getAll,
  getById,
  create,
  uploadFile,
};
