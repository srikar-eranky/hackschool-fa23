const GameStats = require('../models/GameSchema');
const getAllGames = async (req, res) => {
    const gameStats = await GameStats.find();
    res.status(200).json(gameStats);
}
//const getGame = async (req, res) => {
    //const game = {
        //sentence: "Hello there",
        //correctCharacters: 14,
        //incorrectCharacters: 15,
        //wpm: 100,
        //time: 13.33
   // };

   // res.status(200).json(game);
//}

const postGame = async (req, res) => {
    const newGameStat = await GameStats.create(req.body);
    res.status(200).json(newGameStat);
    //const message = req.body;
   // const newGame = {
   //     sentence: message.sentence,
    //    correctCharacters: message.correctCharacters,
     //   incorrectCharacters: message.incorrectCharacters,
       // wpm: message.wpm,
    //    time: message.time
   // }
    /*
    if(!sentence || !correctCharacters || !incorrectCharacters || !wpm || !time){
        res.status(400).json({ error: "invalid request"});
        console.log(message)
        return 
    }
    if(sentence.length != correctCharacters + incorrectCharacters){
        res.status(400).json({ error: "Sentence length is incorrect"});
        return
        
    }
    */


}

module.exports = { postGame, getAllGames};