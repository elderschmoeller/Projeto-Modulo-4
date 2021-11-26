const express = require("express");
const app = express();
// const routes = require("./routes/router");
const {APP_PORT, APP_NAME} = require('./util/appConfig');

app.use(express.json());


app.get('/', (req, res) => res
    .status(200)
    .send({mensagem: 'Welcome to API'
}));


app.listen( APP_PORT, function () {
    console.log(`${APP_NAME} listening at http://localhost:${APP_PORT}`)
});

module.exports = app;