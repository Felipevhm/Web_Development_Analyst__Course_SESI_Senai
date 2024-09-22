const express = require('express');
const router = express.Router();
const questionarioController = require('../controllers/questionarioController');

router.get('/questionarios', questionarioController.listar);
router.post('/questionarios', questionarioController.criar);
router.put('/questionarios/:id', questionarioController.atualizar);
router.delete('/questionarios/:id', questionarioController.deletar);
router.get('/questionarios/perguntas', questionarioController.listarComPerguntas); // Nova rota

module.exports = router;
