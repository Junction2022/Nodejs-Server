const express = require('express');
const commentController = require('../../controllers/comment.controller');

const router = express.Router();

router.post('/', commentController);
router.post('/like/{id}', commentController);
router.post('/dislike/{id}', commentController);

module.exports = router;
