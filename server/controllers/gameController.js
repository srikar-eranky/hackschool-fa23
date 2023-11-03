
const getGame = async (req, res) => {
    const game = {
        sentence: "Hello there",
        correctCharacters: 14,
        incorrectCharacters: 15,
        wpm: 100,
        time: 13.33
    };

    res.status(200).json(game);
}

const postGame = async (req, res) => {
    const message = req.body;
    const sentence = message.sentence;
    const correctCharacters = message.correctCharacters;
    const incorrectCharacters = message.incorrectCharacters;
    const wpm = message.wpm;
    const time = message.time;
    
    if(!sentence || !correctCharacters || !incorrectCharacters || !wpm || !time){
        res.status(400).json({ error: "invalid request"});
        console.log(message)
        return 
    }
    if(sentence.length != correctCharacters + incorrectCharacters){
        res.status(400).json({ error: "Sentence length is incorrect"});
        return
        
    }
    res.status(200).json(message);
}


module.exports = { getGame, postGame };