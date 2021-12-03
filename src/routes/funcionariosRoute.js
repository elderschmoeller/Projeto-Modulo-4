const express = require('express');
const FuncionariosController = require('../controllers/funcionariosController');

const router = express.Router();

router.get('/funcionarios', FuncionariosController.index);
router.get('/funcionarios/:id', FuncionariosController.show);
router.post('/funcionarios', FuncionariosController.save);
router.put('/funcionarios/:id', FuncionariosController.update);
router.delete('/funcionarios/:id', FuncionariosController.remove);

module.exports = router;