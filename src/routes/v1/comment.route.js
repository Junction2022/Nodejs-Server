const express = require('express');
const commentController = require('../../controllers/comment.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', auth(), commentController.create);
router.post('/like/{id}', commentController.addLike);
router.post('/dislike/{id}', commentController.addDislike);

module.exports = router;
