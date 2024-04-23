require("dotenv").config();

const mongoose = require("mongoose");
const PORT = process.env.PORT;
const express = require("express");
const app = express();
// const bodyparser = require("body-parser");
const router = require ('./routes');

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Conectado a la base de datos");

    app.listen(PORT, () => {
      console.log(`Conectado a puerto: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`);
  });

//Middleware
  app.use(express.json());
  app.use('/api',router);