import React, { useState } from "react";
import InitFormElement from "./InitFormElement";

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
		setP1Name();
		setP2Name();
	}

	return (
		<div className="init-form">
      <div className="title">
        <h1>PoolTracker</h1>
      </div>
      
			<form onSubmit={handleSubmit}>
				<InitFormElement
					id="player-1"
					suffix="name-input"
					label="Player 1"
					value={p1Name}
					onChange={(e) => setP1Name(e.target.value)}
				/>
				<InitFormElement
					id="player-2"
					suffix="name-input"
					label="Player 2"
					value={p2Name}
					onChange={(e) => setP2Name(e.target.value)}
				/>
				<InitFormElement
					id="game-duration"
					suffix="input"
					label="Race to"
					value={racks}
					onChange={(e) => setRacks(e.target.value)}
				/>

				<button type="submit" className="btn btn__primary btn__lg">
					Start
				</button>
			</form>
		</div>
	);
}

export default InitForm;
