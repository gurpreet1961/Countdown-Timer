import React from "react";

function StartCancelButton({ isRunning, onStart, onCancel, isDiable }) {
	return (
		<div>
			{!isRunning ? (
				<button onClick={onStart}>Start Timer</button>
			) : (
				<button onClick={onCancel}>Cancel Timer</button>
			)}
		</div>
	);
}

export default StartCancelButton;
