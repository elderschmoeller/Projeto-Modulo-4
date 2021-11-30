const express = require('express');
const ClientesController = require('../controllers/clientesController');

const router = express.Router();

router.get('/clientes', ClientesController.index);
router.get('/clientes/:id', ClientesController.show);
router.post('/clientes', ClientesController.save);
router.put('/clientes:id', ClientesController.update);
router.delete('/clientes:id', ClientesController.remove);

module.exports = router;