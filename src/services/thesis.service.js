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
  // eslint-disable-next-line no-plusplus
  thesis.viewCount++;
  await thesis.save();
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
