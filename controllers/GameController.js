const Player = require("../models/Player");

module.exports = {
  async getPlayer(req, res) {
    try {
      const result = await Player.find();
      res.status(200).json({ data: result });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async createPlayer(req, res) {
    try {
      const result = await Player.create(req.body);
      res.status(201).json({ message: "Registro creado exitosamente", data: result });
    } catch (err) {
      res.status(400).json({ message: "Error al crear el registro", error: err.message });
    }
  },
};
