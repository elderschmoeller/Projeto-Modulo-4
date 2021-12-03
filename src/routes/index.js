const express = require("express");
const ClientesRouter = require('./clientesRoute');
const LivrosRouter = require('./livrosRoute');
const ComprasRouter = require ('./comprasRoute');
const FuncionariosRouter = require ('./funcionariosRoute');
const cors = require("cors");

const router = express.Router();


router.use(cors());

router.use(function(req, res, next) {
  console.log(req.headers.host, new Date().toLocaleTimeString());
  next();
})

router.use(express.json());

router.get('/', function(req, res) {
  res.send('Welcome to ResiliaBooks API')
})

router.use('/', ClientesRouter);
router.use('/', LivrosRouter);
router.use('/', ComprasRouter);
router.use('/', FuncionariosRouter);

module.exports = router;