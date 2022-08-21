const express = require('express');
const commentController = require('../../controllers/comment.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/', auth(), commentController.create);
router.patch('/like/{id}', commentController.addLike);
router.patch('/dislike/{id}', commentController.addDislike);

module.exports = router;
