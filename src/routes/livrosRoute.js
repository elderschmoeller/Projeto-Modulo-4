const express = require('express');
const LivrosController = require('../controllers/livrosController');

const router = express.Router();

router.get('/livros', LivrosController.index);
router.get('/livros/:id', LivrosController.show);
router.post('/livros', LivrosController.save);
router.put('/livros/:id', LivrosController.update);
router.delete('/livros/:id', LivrosController.remove);

module.exports = router;