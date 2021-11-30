const express = require("express");
const router = require('./routes/index');
const {APP_PORT, APP_NAME} = require('./util/appConfig');
const app = express();

app.use(express.json());

app.use("/", router);

app.listen( APP_PORT, function () {
    console.log(`${APP_NAME} listening at http://localhost:${APP_PORT}`)
});

module.exports = app;