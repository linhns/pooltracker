import { useState } from "react";
import InitForm from "./components/InitForm";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [maxRacks, setMaxRacks] = useState(0);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  return gameStarted ? (
    <Scoreboard
      setGameStarted={setGameStarted}
      maxRacks={maxRacks}
      player1Name={player1Name}
      player2Name={player2Name}
    />
  ) : (
    <InitForm
      setGameStarted={setGameStarted}
      setMaxRacks={setMaxRacks}
      setPlayer1Name={setPlayer1Name}
      setPlayer2Name={setPlayer2Name}
    />
  );
}

export default App;
