import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";
import { toast } from "react-toastify";

function App() {
  // all data
  const [allPlayer, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch("./Players.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);

  const [playerSelected, setPlayerSelected] = useState([]);
  const [coin, setCoin] = useState(0);

  const [player, setPlayer] = useState(true);
  // selected player count
  const [selectedPlayer, setSelectedPlayer] = useState(false);
  // onClick useStare for available player button

  // available button function
  const availablePlayerButton = () => {
    setSelectedPlayer(false);
    setPlayer(true);
  };

  // selected button function
  const selectedPlayerButton = () => {
    setSelectedPlayer(true);
    setPlayer(false);
  };

  const [PlayerCount, setPlayerCount] = useState(0);

  const [count, setCount] = useState([]);

  // choose player function
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

  //

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
        ></Players>
      </div>
      {/* Footer Section */}
      <Footer></Footer>
    </>
  );
}

export default App;
