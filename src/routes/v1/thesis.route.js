const express = require('express');
const thesisController = require('../../controllers/thesis.controller');
const upload = require('../../config/multer');

const router = express.Router();

router.get('/', thesisController.getAll);
router.get('/:id', thesisController.getById);
router.post('/', thesisController.create);
router.post('/upload', upload.single('file'), thesisController.uploadFile);

module.exports = router;
