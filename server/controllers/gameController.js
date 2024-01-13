const GameStats = require('../models/GameSchema');

const getGame = async (req, res) => {
    const gameStats = await GameStats.find();
    res.status(200).json(gameStats);
}

const postGame = async (req, res) => {
    const newGame = await GameStats.create(req.body);
    res.status(200).json(newGame);
}

module.exports = {getGame, postGame};