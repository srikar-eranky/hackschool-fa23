const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

// Add API routes here
router.get('/game', gameController.getAllGames);
router.post('/game', gameController.postGame);



module.exports = router;