import React from "react";
import Player from "./Player";

function Scoreboard({ setGameStarted, maxRacks, player1Name, player2Name }) {
  return (
    <div className="scoreboard">
      {maxRacks && maxRacks > 0 ? (
        <div className="players">
          <Player id="player-1" maxRacks={maxRacks} name={player1Name} />
          <Player id="player-2" maxRacks={maxRacks} name={player2Name} />
        </div>
      ) : (
        <span>
          Please click on the New Game button below and configure the number of
          racks needed to win to a positive integer.
        </span>
      )}

      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setGameStarted(false)}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default Scoreboard;
