const Joi = require('joi');

const register = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    password: Joi.string().required(),
    nickname: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    id: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  refreshTokens,
};
