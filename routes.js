 const GameController = require ('./controllers/GameController');
 const express = require ('express');
 const router = express.Router();

 router.get('/getPlayer',GameController.getPlayer);
 router.post('/savePlayer',GameController.createPlayer);


 module.exports = router;