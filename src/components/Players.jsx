/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Player from "./Player";
import { toast } from "react-toastify";
import SelectedPlayer from "./SelectedPlayer";

const Players = ({
  selectedPlayerButton,
  availablePlayerButton,
  player,
  selectedPlayer,
  players
}) => {

  const {name} = players;

  // const [players, setPlayers] = useState([]);
  const [PlayerCount, setPlayerCount] = useState(0);

  // useEffect(() => {
  //   fetch("./Players.json")
  //     .then((res) => res.json())
  //     .then((data) => setPlayers(data));
  // }, []);

  const choosePlayerButton = () => {
    const newPlayerCount = PlayerCount + 1;
    if (newPlayerCount > 6) {
      toast.warn("You can not choose more than 6 players");
    } else {
      setPlayerCount(newPlayerCount);
      toast.success(`Congratulation!! ${name} is now in your squad`);
       
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-right my-10">
        <div>
          <button onClick={availablePlayerButton} className="btn join-item">
            Available
          </button>
          <button onClick={selectedPlayerButton} className="btn join-item">
            Selected({PlayerCount})
          </button>
        </div>
      </div>
      {player && (
        <div className="">
          <h2>Available Players</h2>
          <div className="w-11/12 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {players.map((player, index) => (
              <Player
                key={index}
                player={player}
                choosePlayerButton={choosePlayerButton}
              ></Player>
            ))}
          </div>
        </div>
      )}
      {selectedPlayer && (
        <div>
          <h2>Selected Players ({PlayerCount} / 6) </h2>
          <div className="w-11/12 mx-auto">
            {players.map((selected, index) => (
              <SelectedPlayer key={index} selected={selected}></SelectedPlayer>
            ))}
          </div>
          <button
            className="bg-yellow-400 px-4 py-2 rounded-2xl"
            onClick={availablePlayerButton}
          >
            Add More Player
          </button>
        </div>
      )}
    </div>
  );
};

export default Players;
