import { useState, useEffect } from "react";
import Player from "./Player";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("./Players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            players.map((player, index) => <Player key={index} player={player}></Player>)
        }
    </div>
  )
    
};

export default Players;
