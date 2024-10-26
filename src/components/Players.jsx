/* eslint-disable react/prop-types */
import Player from "./Player";
import SelectedPlayer from "./SelectedPlayer";

const Players = ({
  selectedPlayerButton,
  availablePlayerButton,
  player,
  handleDelete,
  selectedPlayer,
  allPlayer,
  choosePlayerButton,
  count,
  navbarCoinRemove,
}) => {
  return (
    <div className="w-11/12 mx-auto z-5 mb-44">
      <div>
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
          <div>
            <h2 className="text-2xl font-bold my-4">Available Players</h2>
            <div className="w-11/12 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {allPlayer.map((player, index) => (
                <Player
                  key={index}
                  player={player}
                  choosePlayerButton={choosePlayerButton}
                  navbarCoinRemove={navbarCoinRemove}
                ></Player>
              ))}
            </div>
          </div>
        )}
        {selectedPlayer && (
          <div>
            <h2 className="text-2xl font-bold my-4">Selected Players ({count.length} / 6) </h2>
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
              className="bg-yellow-400 my-12 px-4 py-2 rounded-2xl"
              onClick={availablePlayerButton}
            >
              Add More Player
            </button>
          </div>
        )}
      </div>
      <div className="absolute shadow-xl rounded-xl z-30 w-11/12 mx-auto">
        <div className=" bg-yellow-200 rounded-lg bg-[url(../assets/bg-shadow.png)]">
          <div className="card text-black shadow-lg py-28 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-center text-sm mb-4">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="form-control p-4">
              <div className="flex flex-col md:flex-row  gap-2 justify-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input border-none text-black"
                />
                <button className="btn bg-yellow-600 object-cover">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
