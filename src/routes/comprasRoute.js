const express = require('express');
const ComprasController = require('../controllers/comprasController');

const router = express.Router();

router.get('/compras', ComprasController.index);
router.get('/compras/:id', ComprasController.show);
router.post('/compras', ComprasController.save);
router.put('/compras:id', ComprasController.update);
router.delete('/compras:id', ComprasController.remove);

module.exports = router;