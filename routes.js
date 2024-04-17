const GameController = require("./controllers/GameController");
const express = require("express");
const router = express.Router();

router.get('/player', GameController.getPlayer);
router.post('/player',GameController.createPlayer);

module.exports = router;
