const Player = require("../models/Player");

module.exports = {
  async getPlayer(req, res) {
    try {
      const player = await Player.find();
      res.json(player);
    } catch (err) {
      res.status(400).json({error:err.message});
    }
  },

  async createPlayer(req, res) {
    try {
      const player = await Player.create(req.body);
      res.json(player);
    } catch (err) {
      res.status(400).json({error:err.message});
    }
  },
};
