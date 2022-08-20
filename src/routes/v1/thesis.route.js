const express = require('express');
const thesisController = require('../../controllers/thesis.controller');

const router = express.Router();

router.get('/', thesisController.getAll);
router.get('/:id', thesisController.getById);
router.post('/', thesisController.create);

module.exports = router;
