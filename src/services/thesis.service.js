const { Thesis } = require('../models');

const getAllThesis = async () => {
  const thesisList = await Thesis.find({}).sort({ createdAt: 'desc' });
  return thesisList;
};

const getThesisById = async (id) => {
  const thesis = await Thesis.findOne({ _id: id }).populate({
    path: 'comments',
    populate: {
      path: 'user',
    },
  });
  return thesis;
};

const createThesis = async (title, file, language, topic, pageCount, author) => {
  const createdAt = Date.now();
  const thesis = await Thesis.create({ title, file, language, topic, pageCount, author, createdAt });
  return thesis;
};

module.exports = {
  getAllThesis,
  getThesisById,
  createThesis,
};
