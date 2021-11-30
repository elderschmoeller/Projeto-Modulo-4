const express = require("express");
const ClientesRouter = require('./clientesRoute');
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

module.exports = router;