import React, { useState } from "react";

function InitForm({
  setGameStarted,
  setMaxRacks,
  setPlayer1Name,
  setPlayer2Name,
}) {
  const [racks, setRacks] = useState("Enter number of racks...");
  const [p1Name, setP1Name] = useState("Enter Player 1 name");
  const [p2Name, setP2Name] = useState("Enter Player 2 name");

  function handleSubmit(e) {
    e.preventDefault();
    setGameStarted(true);
    setMaxRacks(parseInt(racks));
    setPlayer1Name(p1Name);
    setPlayer2Name(p2Name);
    setRacks();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="player-1-name-input" className="label__lg">
          Player 1
        </label>
      </h2>
      <input
        type="text"
        id="player-1-name-input"
        className="input input__lg"
        name="text"
        value={p1Name}
        autoComplete="off"
        onChange={(e) => setP1Name(e.target.value)}
      />

      <h2 className="label-wrapper">
        <label htmlFor="player-2-name-input" className="label__lg">
          Player 2
        </label>
      </h2>
      <input
        type="text"
        id="player-2-name-input"
        className="input input__lg"
        name="text"
        value={p2Name}
        autoComplete="off"
        onChange={(e) => setP2Name(e.target.value)}
      />

      <h2 className="label-wrapper">
        <label htmlFor="game-duration-input" className="label__lg">
          Race to
        </label>
      </h2>
      <input
        type="text"
        id="game-duration-input"
        className="input input__lg"
        name="text"
        value={racks}
        autoComplete="off"
        onChange={(e) => setRacks(e.target.value)}
      />

      <button type="submit" className="btn btn__primary btn__lg">
        Start
      </button>
    </form>
  );
}

export default InitForm;
