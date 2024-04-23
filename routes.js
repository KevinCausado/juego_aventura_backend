 const GameController = require ('./controllers/GameController');
 const express = require ('express');
 const router = express.Router();

 router.get('/getPlayer',GameController.getPlayer);
 router.get('/getPlayerId/:id',GameController.getPlayerById);
 router.post('/savePlayer',GameController.createPlayer);
 router.put('/updatePlayer/:id',GameController.updatePlayer);
 


 module.exports = router;