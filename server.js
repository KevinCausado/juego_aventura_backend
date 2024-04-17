require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const routes = require ('./routes');

const bodyParser = require("body-parser");

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Conectado a la base de datos");

    app.listen(PORT, () => {
      console.log(`Escuchando en puerto : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error al conectarse : ${err}`);
  });


  app.use(bodyParser.json());
  app.use('/api',routes);