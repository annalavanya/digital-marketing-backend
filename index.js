//package imports
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var bodyParser = require("body-parser");
const helmet = require("helmet");

app = express();

app.use(helmet());

async function loadApp() {
models = require("./models");

  /*Initialize app with basic settings*/

  app.use(cors());
  app.use(express.json({ limit: 1024 * 1024 * 200 }));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  models.sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to SQL database:", CONFIG.db_name);
      const shema = models.schemaCreate.then(() => {
        models.sequelize.sync().then(async () => {
        });
      });
    })
    .catch((err) => {
      console.error(
        "Unable to connect to Postgres database:",
        CONFIG.db_name,
        err.message
      );
    });
  }
loadApp();

module.exports = app;
