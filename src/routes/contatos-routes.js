const express = require('express');
const router = express.Router();
const contatosController = require('../controller/contatos-controller');

router.post('/', contatosController.createContato);
router.get('/', contatosController.listContato);

module.exports = router;