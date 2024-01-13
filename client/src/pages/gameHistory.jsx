// Import the GameHistory component
import CardComponent from "@/components/game-history-component/gameHistory";
import styles from "../styles/History.module.css";
import React, {useState, useEffect} from "react";
import axios from "axios";

export default function GameHistory() {
  const [gameData, setGameData] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/game")
      setGameData(response.data)
    } catch(error){
      console.error("Error fetching data", error)
    };
  }
  useEffect(()=> {
    fetchData()
  }, []);
    return (
        <div className={styles.container}>
            <h1>Previous Games</h1>

            {/* Container for top 3 games */}
            {/*
            
            <div className={styles.top_three}>
                <h3>Top 3 Games</h3>
                <div className={styles.top_three_cards}>
                    <CardComponent sentence={"This was the fastest typed sentence"}/>
                    <CardComponent wpm = {67}/>
                    <CardComponent correctCharacters = {5} incorrectCharacters={7}/>
                </div>
            </div>
            */}
               
            {/* Container for all games */}
            <div className={styles.all_games}>
                <h3 className={styles.header}>All Games</h3>
                <div className={styles.all_cards}>
                    {gameData.map((game,index) => {
                        <CardComponent key={index} {...game}/>
                    })}
                </div>
            </div>
        </div>
    );
}