/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Player from "./Player";
import { toast } from "react-toastify";
import SelectedPlayer from "./SelectedPlayer";

const Players = ({
  selectedPlayerButton,
  availablePlayerButton,
  player,
  handleDelete,
  selectedPlayer,
  allPlayer,
  choosePlayerButton,
  PlayerCount,
  count
}) => {
  return (
    <div className="w-11/12 mx-auto z-5">
      <div className="text-right my-10">
        <div>
          <button onClick={availablePlayerButton} className="btn join-item">
            Available
          </button>
          <button onClick={selectedPlayerButton} className="btn join-item">
            Selected({count.length})
          </button>
        </div>
      </div>
      {player && (
        <div className="">
          <h2>Available Players</h2>
          <div className="w-11/12 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {allPlayer.map((player, index) => (
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
          <h2>Selected Players ({count.length} / 6) </h2>
          <div className="w-11/12 mx-auto">
            {count.map((selected, index) => (
              <SelectedPlayer
                key={index}
                selected={selected}
                choosePlayerButton={choosePlayerButton}
                handleDelete={handleDelete}
              ></SelectedPlayer>
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
