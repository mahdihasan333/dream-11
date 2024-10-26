import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";
import { toast } from "react-toastify";

function App() {
  // all data
  const [allPlayer, setAllPlayers] = useState([]);
  const [playerSelected, setPlayerSelected] = useState([]);
  const [coin, setCoin] = useState(0);
  const [player, setPlayer] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState(false);
  const [PlayerCount, setPlayerCount] = useState(0);
  const [removeCoin, setRemoveCoin] = useState(0);

  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch("./Players.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);

  const availablePlayerButton = () => {
    setSelectedPlayer(false);
    setPlayer(true);
  };

  const selectedPlayerButton = () => {
    setSelectedPlayer(true);
    setPlayer(false);
  };

  const choosePlayerButton = (player) => {
    if (coin === 0) {
      return toast.warn(
        "Not enough money to buy this player. claim some credit"
      );
    }

    const newCount = [...count, player];

    if (count.length >= 6) {
      toast.warn("You can not choose more than 6 players");
      return;
    }
    const doubleCount = count.find(
      (double) => double.playerId === player.playerId
    );
    if (!doubleCount) {
      setPlayerCount(count.length);
      setCount(newCount);
      console.log(newCount);
      toast.success(`Congratulation!! ${player.name} is now in your squad`);
      return;
    } else {
      toast.warn("Player already selected");
      return;
    }
  };

  const navbarCoinRemove = (id) => {
    const newCoin = setCoin - id ;
    setCoin(newCoin);
  };

  const AddCoin = () => {
    const newCoin = coin + 600000;
    setCoin(newCoin);
    toast.success("Credit Added to your account");
  };

  const handleDelete = (players) => {
    const foundPlayer = count.find(
      (player) => player.playerId === players.playerId
    );
    console.log(foundPlayer);
    if (foundPlayer) {
      const newCount = count.filter(
        (player) => player.playerId !== players.playerId
      );
      console.log(newCount);
      setCount(newCount);
      toast.warning(`${player.name} removed from your squad`);
      return;
    }
  };

  return (
    <>
      {/* Header Section */}
      <Header AddCoin={AddCoin} coin={coin}></Header>
      {/* Main Section */}
      <div className="z-10">
        <Players
          selectedPlayerButton={selectedPlayerButton}
          availablePlayerButton={availablePlayerButton}
          player={player}
          selectedPlayer={selectedPlayer}
          allPlayer={allPlayer}
          choosePlayerButton={choosePlayerButton}
          PlayerCount={PlayerCount}
          count={count}
          playerSelected={playerSelected}
          handleDelete={handleDelete}
          navbarCoinRemove={navbarCoinRemove}
          removeCoin={removeCoin}
        ></Players>
      </div>
      {/* Footer Section */}
      <Footer></Footer>
    </>
  );
}

export default App;
