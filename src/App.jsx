import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";

function App() {
  const [player, setPlayer] = useState(true);
  // selected player count
  const [selectedPlayer, setSelectedPlayer] = useState(false);

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("./Players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

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

  return (
    <>
      {/* Header Section */}
      <Header></Header>
      {/* Main Section */}
      <div>
        <Players
          selectedPlayerButton={selectedPlayerButton}
          availablePlayerButton={availablePlayerButton}
          player={player}
          selectedPlayer={selectedPlayer}
          players={players}
        ></Players>
      </div>
      {/* Footer Section */}
      <Footer></Footer>
    </>
  );
}

export default App;
