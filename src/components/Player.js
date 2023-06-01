import React, { useState } from "react";

function Player({ id, maxRacks, name }) {
  const [score, setScore] = useState(0);

  function increment() {
    setScore((score) => (score === maxRacks ? score : score + 1));
  }

  function decrement() {
    setScore((score) => {
      if (score === 0) return score;
      return score - 1;
    });
  }

  return (
    <div id={id} className="player">
      <span className="player-name">{name} </span>
      <span className="player-score">{score}</span>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}

export default Player;
